export function generateMetadata({}: Props): Promise<Metadata> {
  return {
    title: "WasteNot - Cause Detail",
  };
}

export default function CauseDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
