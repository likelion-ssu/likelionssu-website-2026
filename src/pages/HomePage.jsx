export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 px-10">
      <div className="typo-pretitle1k text-purple-500">HomePage</div>

      <nav className="flex flex-col gap-4">
        {["P A R T", "A B O U T U S", "P R O J E C T"].map((item) => (
          <button
            key={item}
            className="typo-pretitle2e text-black hover:text-purple-500 transition underline underline-offset-8 decoration-transparent hover:decoration-purple-500"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
