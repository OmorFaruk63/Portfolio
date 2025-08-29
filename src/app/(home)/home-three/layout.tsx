import FooterThree from "@/components/common/footer-three";

export default function HomeThreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
      {children}
      <FooterThree />
    </>
  );
}
