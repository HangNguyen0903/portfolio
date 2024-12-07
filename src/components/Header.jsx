import ThemeToggle from "../common/ThemeContext";

const Header = () => {
  return (
    <div>
      <header className="bg-[#19191Bs] dark:bg-[#ffffff] text-white fixed w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Introduce
                </a>
              </li>
              <li>
                <a href="#target" className="hover:text-blue-400">
                  Target
                </a>
              </li>
              <li>
                <a href="#skill" className="hover:text-blue-400">
                  Skill
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#active" className="hover:text-blue-400">
                  Activate
                </a>
              </li>
              <ThemeToggle />
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
