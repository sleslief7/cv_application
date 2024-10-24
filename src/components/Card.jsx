export default function Card({ children, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className="card">{children}</div>
    </div>
  );
}
