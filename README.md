# 🛡️ ChainTalk - Web3 E2EE Messenger

**ChainTalk** là một ứng dụng nhắn tin phi tập trung, bảo mật đầu cuối (End-to-End Encryption - E2EE) được xây dựng trên nền tảng công nghệ Blockchain. Dự án giải quyết bài toán hạ tầng khóa công khai (PKI) bằng cách tận dụng định danh ví điện tử và chữ ký số.

---

## 🚀 Tổng quan dự án (Project Overview)

* **Chủ đề:** Nghiên cứu giải pháp liên lạc mã hóa ứng dụng công nghệ Blockchain (Decentralized PKI).
* **Mục tiêu:** Xây dựng nền tảng nhắn tin mà không cần máy chủ trung tâm, đảm bảo quyền riêng tư tuyệt đối thông qua mã hóa E2EE và giao thức P2P.
* **Giai đoạn hiện tại:** Tuần 1 - Khởi tạo hạ tầng và Thiết lập định danh.

---

## ✨ Tính năng nổi bật (Core Features)

-   **Decentralized Identity:** Đăng nhập không mật khẩu thông qua ví Blockchain (MetaMask, v.v.).
-   **End-to-End Encryption (E2EE):** Tin nhắn được mã hóa tại máy người gửi và chỉ giải mã được tại máy người nhận.
-   **Zero Gas Fees:** Nhắn tin miễn phí thông qua mạng lưới XMTP mà không cần trả phí giao dịch on-chain.
-   **Privacy First:** Không thu thập dữ liệu cá nhân, không lưu trữ tin nhắn chưa mã hóa trên bất kỳ máy chủ nào.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ |
| :--- | :--- |
| **Framework** | [Next.js 14/15](https://nextjs.org/) (App Router) |
| **Ngôn ngữ** | [TypeScript](https://www.typescriptlang.org/) |
| **Giao diện** | [Tailwind CSS](https://tailwindcss.com/) |
| **Web3 Core** | [XMTP SDK](https://xmtp.org/) (Messaging Protocol) |
| **Kết nối ví** | [RainbowKit](https://www.rainbowkit.com/) & [Wagmi](https://wagmi.sh/) |
| **Blockchain** | Ethereum / Sepolia Testnet |

---

## 🏗️ Kiến trúc hệ thống (Architecture)

Dự án sử dụng mô hình **Decentralized PKI (dPKI)**:
1.  **Identity:** Sử dụng địa chỉ ví Ethereum làm định danh duy nhất.
2.  **Key Management:** Sử dụng chữ ký ví (Wallet Signature) để tạo ra các cặp khóa mã hóa (Installation Keys) mà không cần Smart Contract tốn phí Gas.
3.  **Transport:** Tin nhắn đã mã hóa được truyền tải qua mạng lưới các Node phi tập trung của XMTP.

---

## 📅 Lộ trình phát triển (Roadmap)

-   [x] **Tuần 1:** Khởi tạo dự án Next.js, thiết lập GitHub và WalletConnect Cloud.
-   [ ] **Tuần 2:** Tích hợp RainbowKit và tính năng kết nối ví.
-   [ ] **Tuần 3-6:** Tích hợp XMTP SDK và xây dựng lõi mã hóa E2EE.
-   [ ] **Tuần 7-9:** Xây dựng mạng truyền tải P2P và xử lý luồng tin nhắn Real-time.
-   [ ] **Tuần 10-12:** Hoàn thiện UI/UX, đóng gói Docker và viết báo cáo.

---

## 🛠️ Cài đặt (Installation)

1. **Clone dự án:**
   ```bash
   git clone [https://github.com/USER_NAME/chaintalk-dapp.git](https://github.com/USER_NAME/chaintalk-dapp.git)
   cd chaintalk-dapp