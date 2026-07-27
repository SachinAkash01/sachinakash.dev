import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  action,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-index">{index}</span>
        <p className="mono-label">{eyebrow}</p>
      </div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  );
}
