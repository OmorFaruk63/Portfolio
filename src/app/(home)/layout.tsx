import Header from "@/components/common/Header";

export default function HomeOneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* this header for all home pages only */}
      <Header headerClass="style2" />
      {children}
    </>
  );
}
