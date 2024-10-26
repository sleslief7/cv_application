export default function Collapse({
  id,
  header,
  bigHeader,
  selectedId,
  setSelectedId,
  children,
}) {
  const isSelected = selectedId === id;
  return (
    <div className={`collapse ${!isSelected ? 'collapsed' : ''}`} key={id}>
      <h4
        className={`collapse-header ${bigHeader && 'big-header'}`}
        onClick={() => setSelectedId(isSelected ? null : id)}
      >
        {header}
      </h4>
      {isSelected && <div className="collapse-content">{children}</div>}
    </div>
  );
}
