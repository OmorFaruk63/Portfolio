import CaseStudyItem from "./CaseStudyItem";

const caseStudies = [
  {
    id: 1,
    title: "Moody finance mobile app",
    image: "/images/project/1.png",
    tag: "ElevateUX",
  },
  {
    id: 2,
    title: "Restaurants website",
    image: "/images/project/2.png",
    tag: "Branding",
  },
  {
    id: 3,
    title: "Porsonal Mordern Website",
    image: "/images/project/3.png",
    tag: "Evolvify UX Agency",
  },
  {
    id: 4,
    title: "Transportation mobile app",
    image: "/images/project/4.png",
    tag: "ZenithDesign",
  },
  {
    id: 5,
    title: "Finance Management App",
    image: "/images/project/5.png",
    tag: "Inspire",
  },
  {
    id: 6,
    title: "Elevating Experiences",
    image: "/images/project/6.png",
    tag: "Barber Shop app",
  },
  {
    id: 7,
    title: "Dashboard Design",
    image: "/images/project/7.png",
    tag: "IntuiInteract Design",
  },
  {
    id: 8,
    title: "Rock- Music Concert",
    image: "/images/project/8.png",
    tag: "VoyageUX Endeavors",
  },
  {
    id: 9,
    title: "Finance mobile app",
    image: "/images/project/9.png",
    tag: "Creative Apps",
  },
];

export default function CaseStudiesGrid() {
  return (
    <div className="row g-4 gy-5">
      {caseStudies.map((study) => (
        <div className="col-lg-4" key={study.id}>
          <CaseStudyItem {...study} />
        </div>
      ))}
    </div>
  );
}
