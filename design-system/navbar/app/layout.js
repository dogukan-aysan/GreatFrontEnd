import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Design system | Button component",
  description: "Versatile button component that is part of a design system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} bg-gradient-to-br from-gray-50 to-[#d2d6db]`}>{children}</body>
    </html>
  );
}
