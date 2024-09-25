import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce | Footer Section",
  description: "Multi-column footer component for e-commerce websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} min-h-screen p-4 flex bg-gradient-to-br from-gray-50 to-[#d2d6db] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
