export default function Card({ children, title }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="card">{children}</div>
    </>
  );
}
