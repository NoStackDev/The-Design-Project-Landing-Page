import "./globals.css";

export const metadata = {
  title: "The Design Project",
  description: "The Design Project landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
