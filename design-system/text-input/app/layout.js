import { Noto_Sans } from "next/font/google";

import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Design system | Text input component",
  description: "Versatile text input component that is part of a design system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>{children}</body>
    </html>
  );
}
