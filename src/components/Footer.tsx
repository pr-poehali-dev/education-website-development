import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-edu-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ОбразумЦентр</h3>
            <p className="text-gray-300 mb-4">
              Мы помогаем развивать потенциал через качественное образование и персональный подход к каждому ученику.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-edu-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-edu-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-edu-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-edu-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-edu-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-edu-primary transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-edu-primary transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-edu-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#training" className="text-gray-300 hover:text-edu-primary transition-colors">Обучение</Link>
              </li>
              <li>
                <Link to="/services#consultations" className="text-gray-300 hover:text-edu-primary transition-colors">Консультации</Link>
              </li>
              <li>
                <Link to="/services#workshops" className="text-gray-300 hover:text-edu-primary transition-colors">Мастер-классы</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-0.5 text-edu-primary" size={18} />
                <span className="text-gray-300">ул. Образовательная, 42, г. Москва, 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-edu-primary" size={18} />
                <a href="tel:+74951234567" className="text-gray-300 hover:text-edu-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-edu-primary" size={18} />
                <a href="mailto:info@obrazum.ru" className="text-gray-300 hover:text-edu-primary transition-colors">info@obrazum.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ОбразумЦентр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
