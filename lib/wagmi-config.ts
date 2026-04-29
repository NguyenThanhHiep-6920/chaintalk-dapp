// lib/wagmi-config.ts
import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ChainTalk',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? 'fallback',
  chains: [mainnet, sepolia],
  ssr: false, // ← Đổi thành false
});