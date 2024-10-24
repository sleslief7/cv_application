export default function Input({ label, type = 'text', id, value, setValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
