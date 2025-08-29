type InfoItem = [label: string, value: string];

interface ProjectInfoCardProps {
  title: string;
  info: InfoItem[];
}

export default function ProjectInfoCard({
  title,
  info = [],
}: ProjectInfoCardProps) {
  return (
    <div className="sidebar__project">
      <div className="sidebar__head">
        <h4>{title}</h4>
      </div>
      <div className="sidebar__project-info border-top pt-30 mt-15">
        <ul>
          {info.map(([label, value], idx) => (
            <li key={idx}>
              <strong>{label}</strong>: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
