import DonatorsHeader from "@/components/donators/DonatorsHeader.tsx";

export default function DonatorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DonatorsHeader />
      <div>{children}</div>
    </>
  );
}
