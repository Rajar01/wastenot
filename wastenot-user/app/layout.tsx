import "./globals.css";

import Navbar from "@/components/organisms/shared/Navbar.tsx";
import Footer from "@/components/organisms/shared/Footer.tsx";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-center" />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
