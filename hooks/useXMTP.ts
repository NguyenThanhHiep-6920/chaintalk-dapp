"use client";

import { useState, useCallback } from 'react';
import { Client, IdentifierKind } from '@xmtp/browser-sdk';
import { useWalletClient, useAccount } from 'wagmi';
import { toBytes } from 'viem'; 

export const useXMTP = () => {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  
  const [xmtpClient, setXmtpClient] = useState<any>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializeXmtp = useCallback(async () => {
    if (!isConnected || !walletClient) {
      setError("Vui lòng chờ ví kết nối hoàn tất.");
      return;
    }

    setIsInitializing(true);
    setError(null);

    try {
      // Signer chuẩn 100% tương thích XMTP V3 và Wagmi (hỗ trợ tốt cả quét mã QR)
      const xmtpSigner = {
        type: 'EOA' as const, 
        getIdentifier: () => ({
          identifier: walletClient.account.address,
          identifierKind: IdentifierKind.Ethereum, 
        }),
        signMessage: async (message: string | Uint8Array) => {
          const signatureHex = await walletClient.signMessage({
            message: typeof message === 'string' ? message : { raw: message },
            account: walletClient.account,
          });
          
          return toBytes(signatureHex); 
        },
      };

      // Đã sửa lỗi: Xóa bỏ { env: "dev" } để phù hợp với interface ClientOptions mới nhất
      const client = await Client.create(xmtpSigner);
      
      setXmtpClient(client);
      console.log("Khởi tạo XMTP Client thành công cho ví:", walletClient.account.address);

    } catch (err: any) {
      console.error("Lỗi khi khởi tạo XMTP Client:", err);
      setError(err.message || "Đã xảy ra lỗi khi tạo Client. Hãy thử lại.");
    } finally {
      setIsInitializing(false);
    }
  }, [walletClient, isConnected]);

  const disconnectXmtp = () => {
    setXmtpClient(null);
  };

  return {
    xmtpClient,
    isInitializing,
    error,
    initializeXmtp,
    disconnectXmtp
  };
};