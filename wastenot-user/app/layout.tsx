import "./globals.css";

import Navbar from "@/components/organisms/shared/Navbar.tsx";
import Footer from "@/components/organisms/shared/Footer.tsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
