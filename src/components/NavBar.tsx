import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-edu-primary">ОбразумЦентр</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-edu-primary hover:bg-edu-accent transition-colors">
              Главная
            </Link>
            <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:text-edu-primary hover:bg-edu-accent transition-colors">
              Услуги
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-edu-primary hover:bg-edu-accent transition-colors">
              О нас
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:text-edu-primary hover:bg-edu-accent transition-colors">
              Блог
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:text-edu-primary hover:bg-edu-accent transition-colors">
              Контакты
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Button className="ml-4 bg-edu-primary hover:bg-edu-secondary transition-colors">
              Записаться на консультацию
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-edu-primary hover:bg-edu-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть меню</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-edu-primary hover:bg-edu-accent"
            onClick={toggleMenu}
          >
            Главная
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-edu-primary hover:bg-edu-accent"
            onClick={toggleMenu}
          >
            Услуги
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-edu-primary hover:bg-edu-accent"
            onClick={toggleMenu}
          >
            О нас
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-edu-primary hover:bg-edu-accent"
            onClick={toggleMenu}
          >
            Блог
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-edu-primary hover:bg-edu-accent"
            onClick={toggleMenu}
          >
            Контакты
          </Link>
          <Button className="w-full mt-4 bg-edu-primary hover:bg-edu-secondary transition-colors">
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
