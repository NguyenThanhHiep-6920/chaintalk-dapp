import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 p-6 text-white">
      {/* Khối Header/Logo */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          ChainTalk
        </h1>
        <p className="text-lg text-gray-400 max-w-md mx-auto">
          Nền tảng nhắn tin Web3 mã hóa đầu cuối. Kết nối ví của bạn để xác thực danh tính.
        </p>
      </div>

      {/* Khu vực hiển thị nút Connect */}
      <div className="p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
        <ConnectButton />
      </div>

      {/* Footer nhỏ */}
      <div className="absolute bottom-6 text-sm text-gray-600">
        Hoạt động trên mạng lưới Sepolia Testnet
      </div>
    </main>
  );
}