import CodeIcon from "../icons/CodeIcon";

export const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 lg:px-6 h-16 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center">
        <CodeIcon size={28} />
        <span className="text-xl font-bold text-gray-900 ml-3">My Portfolio</span>
      </div>

      {/* Navigation */}
      <nav className="hidden sm:flex items-center gap-6">
        {["Home", "Projects", "Skills", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-all"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <button className="sm:hidden text-gray-700 hover:text-gray-900 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};
