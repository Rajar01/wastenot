import CausesHeader from "@/components/causes/CausesHeader.tsx";

export default function CausesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CausesHeader />
      <div>{children}</div>
    </>
  );
}
