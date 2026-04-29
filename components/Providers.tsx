'use client'; // Bắt buộc phải có dòng này ở đầu file

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultConfig,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Cấu hình mạng lưới và kết nối
const config = getDefaultConfig({
  appName: 'ChainTalk',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string, // Lấy ID từ file .env.local
  chains: [mainnet, sepolia],
  ssr: true, // Rất quan trọng cho Next.js để tránh lỗi hydration
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* Sử dụng darkTheme cho ngầu, phù hợp với app bảo mật */}
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}