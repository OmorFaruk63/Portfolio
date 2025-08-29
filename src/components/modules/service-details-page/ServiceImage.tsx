import NextImage from "@/components/common/NextImage";

export default function ServiceImage() {
  return (
    <div
      className="service-details__thumb mb-40"
      data-aos="fade-up"
      data-aos-duration={800}
    >
      <div className="service-details__thumb-inner">
        <NextImage
          width={730}
          height={356}
          src="/images/service/details/1.png"
          alt="service-images"
        />
      </div>
    </div>
  );
}
