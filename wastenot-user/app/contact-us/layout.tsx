import PageHeader from "@/components/molecules/shared/PageHeader.tsx";

export function generateMetadata({}: Props): Promise<Metadata> {
  return {
    title: "WasteNot - Contact Us",
  };
}

export default function ContactUsLayout({
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
            <span className="text-tertiary">Contact Us</span>
          </>
        }
        pagename="Contact Us"
        text="Feel Free to Contact and Reach Us Now !"
      />
      <div>{children}</div>
    </>
  );
}
