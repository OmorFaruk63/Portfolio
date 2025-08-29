"use client";
import ErrorSection from "@/components/common/ErrorSection";
import Footer from "@/components/common/footer";
import Header from "@/components/common/Header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <ErrorSection error={error} reset={reset} />
      <Footer />
    </>
  );
}
