
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";




const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Obtém a URL atual
  const shouldHideLinks = ["/servicos", "/agendamento"].includes(location.pathname);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-barber-900/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-4xl font-bold text-white font-serif">FIAIZ</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-28 flex items-baseline space-x-10 ">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#services">Serviços</NavLink>
              {!shouldHideLinks && (
                <>
                  <NavLink href="/#portfolio">Portfólio</NavLink>
                  <NavLink href="/#contact">Contato</NavLink>
                </>
              )}
              <NavLink href="Agendamentos">Agendemento</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-barber-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-barber-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              Serviços
            </MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfólio
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contato
            </MobileNavLink>
            <MobileNavLink href="Agendamentos" onClick={() => setIsMenuOpen(false)}>
              Agendamento
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:text-barber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white hover:text-barber-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;

