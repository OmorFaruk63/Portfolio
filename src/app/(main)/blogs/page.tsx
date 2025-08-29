import PageHeader from "@/components/common/PageHeader";
import BlogSection from "@/components/modules/blog/BlogSection";

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blogs"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blogs" }]}
      />
      <>
        {/* ===============>> Blogs section start here <<================= */}
        <BlogSection />
        {/* ===============>> Blogs section start here <<================= */}
      </>
    </>
  );
}
