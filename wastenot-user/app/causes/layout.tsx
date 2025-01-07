import PageHeader from "@/components/molecules/shared/PageHeader.tsx";

export default function CausesLayout({
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
            <span className="text-tertiary">Causes</span>
          </>
        }
        pagename="Causes"
        text="Find The  Cause That Closest From Your Location To Help"
      />
      <div>{children}</div>
    </>
  );
}
