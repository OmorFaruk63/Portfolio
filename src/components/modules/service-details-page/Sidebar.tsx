import SidebarCategories from "./SidebarCategories";
import SidebarCTA from "./SidebarCTA";
import SidebarSearch from "./SidebarSearch";
import SidebarTags from "./SidebarTags";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="row g-4">
        <div className="col-12">
          <SidebarSearch />
        </div>
        <div className="col-12">
          <SidebarCategories />
        </div>
        <div className="col-12">
          <SidebarTags />
        </div>
        <div className="col-12">
          <SidebarCTA />
        </div>
      </div>
    </div>
  );
}
