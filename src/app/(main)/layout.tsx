import Footer from "@/components/common/footer";
import Header from "@/components/common/Header";

export default function HomeOneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* This header & footer for all pages except homes */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
