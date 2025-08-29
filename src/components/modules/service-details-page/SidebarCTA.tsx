import Link from "next/link";

// components/SidebarCTA.jsx
export default function SidebarCTA() {
  return (
    <div className="sidebar__cta">
      <h3>Torkfolio</h3>
      <h5>CONTACT ME NOW</h5>
      <h4>(+089) 934 71 45 23</h4>
      <Link className="trk-btn trk-btn--primary" href="/contact">
        Let’s Work
      </Link>
    </div>
  );
}
