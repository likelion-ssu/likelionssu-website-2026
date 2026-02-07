import { useNavigate } from "react-router-dom";
import HoverBtn from "../components/header/HoverBtn";

export default function HomePage() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "P A R T", path: "/part" },
    { label: "A B O U T U S" },
    { label: "P R O J E C T" },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 px-10">
      <div className="typo-pretitle1k text-primarybrand">HomePage</div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="typo-pretitle2e text-line hover:text-text transition underline underline-offset-8 decoration-transparent hover:decoration-text"
          >
            {item.label}
          </button>
        ))}
        <HoverBtn/>
      </nav>
    </div>
  );
}
