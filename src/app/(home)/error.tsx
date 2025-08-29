"use client";
import ErrorSection from "@/components/common/ErrorSection";

export default function HomeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <ErrorSection error={error} reset={reset} />
    </>
  );
}
