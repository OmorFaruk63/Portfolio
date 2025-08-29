import PageHeader from "@/components/common/PageHeader";
import ServiceDetailsPage from "@/components/modules/service-details-page/ServiceDetailsPage";

export default function ServiceDetailPage() {
  return (
    <>
      <PageHeader
        title="Service Details"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
      <>
        {/* ===============>> Service section start here <<================= */}
        <ServiceDetailsPage />
        {/* ===============>> Service section start here <<================= */}
      </>
    </>
  );
}
