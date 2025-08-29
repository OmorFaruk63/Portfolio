import FooterTwo from "@/components/common/footer-two";

export default function HomeTwoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <FooterTwo />
    </>
  );
}
