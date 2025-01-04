import ContactUsHeader from "@/components/contact-us/ContactUsHeader.tsx";

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContactUsHeader />
      <div>{children}</div>
    </>
  );
}
