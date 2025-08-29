import PageHeader from "@/components/common/PageHeader";
import BlogDetails from "@/components/modules/blog/blog-details/BlogDetails";

export default function BlogDetailsPage() {
  return (
    <>
      <PageHeader
        title="Blog details"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blogs", href: "/blogs" },
          { name: "Blogs details" }, // current page
        ]}
      />

      <>
        <>
          {/* ===============>> Blogs section start here <<================= */}
          <BlogDetails />
          {/* ===============>> Blogs section start here <<================= */}
        </>
      </>
    </>
  );
}
