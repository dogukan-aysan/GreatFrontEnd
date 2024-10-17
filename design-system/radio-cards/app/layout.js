import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Design system | Radio Cards component",
  description: "Versatile radio cards component that is part of a design system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} antialiased h-screen grid place-content-center`}>{children}</body>
    </html>
  );
}
