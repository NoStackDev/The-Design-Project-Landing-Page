import "./globals.css";
import { Montserrat } from "next/font/google";


export const metadata = {
  title: "The Design Project",
  description: "The Design Project landing page",
};

const MontserratFont = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={MontserratFont.variable}>{children}</body>
    </html>
  );
}
