import PageHeader from "@/components/common/PageHeader";
import ContactSection from "@/components/modules/home/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact Us" }]}
      />
      {/* ===============>> Contact section start here <<================= */}
      <ContactSection />
      {/* ===============>> Contact section start here <<================= */}

      {/* ==========location map start Here========== */}
      <section className="contact">
        <div className="contact__map">
          <iframe
            id="gmap_canvas"
            className="map"
            src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      {/* ==========location map end Here========== */}
    </>
  );
}
