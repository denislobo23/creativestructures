import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i}>
              {it.href && !last ? (
                <Link href={it.href}>{it.label}</Link>
              ) : (
                <span aria-current="page">{it.label}</span>
              )}
              {!last && <span className="sep" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
