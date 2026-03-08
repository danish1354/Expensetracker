export default function FilterButton({ label, onClick }) {
  return (
    <button className="pill" onClick={onClick}>
      {label}
    </button>
  );
}
