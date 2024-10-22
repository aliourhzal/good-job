export default function Footerli({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-3 font-light hover:text-text-orange text-sm capitalize">
      <button>{children}</button>
    </li>
  );
}
