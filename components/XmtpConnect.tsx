"use client";

import React from 'react';
import { useAccount } from 'wagmi';
import { useXMTP } from '../hooks/useXMTP';

export const XmtpConnect = () => {
  // Lấy thêm 'address' từ Wagmi
  const { isConnected, address } = useAccount(); 
  const { xmtpClient, isInitializing, error, initializeXmtp } = useXMTP();

  if (!isConnected) {
    return null;
  }

  if (xmtpClient) {
    return (
      <div className="mt-6 w-full p-4 bg-emerald-900/30 border border-emerald-800 rounded-xl text-center">
        <p className="text-emerald-400 font-semibold mb-1">✅ Đã xác thực danh tính XMTP</p>
        {/* Sử dụng biến address của Wagmi thay vì xmtpClient.address */}
        <p className="text-xs text-gray-400 truncate px-2">Identity: {address}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-center w-full">
      <button
        onClick={initializeXmtp}
        disabled={isInitializing}
        className={`w-full py-3 px-4 font-semibold rounded-xl transition-all ${
          isInitializing 
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-blue-500/25'
        }`}
      >
        {isInitializing ? '⏳ Đang chờ bạn ký trên ví...' : '✍️ Khởi tạo danh tính XMTP'}
      </button>

      {error && (
        <p className="text-red-400 text-sm mt-3 w-full bg-red-900/30 p-2 rounded-lg border border-red-800/50 text-center">
          Lỗi: {error}
        </p>
      )}
      
      <p className="text-xs text-gray-500 mt-4 text-center px-2">
        Bạn cần ký một tin nhắn (không tốn phí gas) để cấp quyền cho dApp mã hóa tin nhắn.
      </p>
    </div>
  );
};