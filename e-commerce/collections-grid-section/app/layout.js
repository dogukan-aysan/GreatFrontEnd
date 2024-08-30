import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce | Collections Grid Section",
  description: "Collections Grid Section component for e-commerce websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} min-h-screen flex p-4 bg-gradient-to-br from-gray-50 to-[#d2d6db]`}>{children}</body>
    </html>
  );
}
