import PageHeader from "@/components/molecules/shared/PageHeader.tsx";

export default function DonatorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader
        breadcrumb={
          <>
            <span className="after:content-['\00a0']">Home -</span>
            <span className="text-tertiary">Donators</span>
          </>
        }
        pagename="Donators"
        text="Meet Our Generous Donator for Food Donation"
      />
      <div>{children}</div>
    </>
  );
}
