import NextImage from "@/components/common/NextImage";

export default function ProjectFeatureImages() {
  return (
    <div className="project-details__feature mt-50 mb-25">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="project-details__feature-thumb">
            <NextImage
              width={315}
              height={200}
              src="/images/project/details/2.png"
              alt="project images"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="project-details__feature-thumb">
            <NextImage
              width={315}
              height={200}
              src="/images/project/details/3.png"
              alt="project images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
