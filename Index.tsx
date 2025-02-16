import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Scissors, Clock, MapPin, Phone, Camera, Star, Crown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Enhanced Parallax */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1 ')`,
          backgroundPosition: `center ${offset * 0.5}px`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center mb-4">
          <Crown className="w-10 h-10 text-yellow-500 animate-pulse mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif animate-fadeIn">
              Fiaiz - Barbearia
            </h1>
            <Crown className="w-10 h-10 text-yellow-500 animate-pulse mr-3" />
          </div>
          <p className="text-xl md:text-2xl text-yellow-500 mb-8 animate-fadeIn italic" style={{ animationDelay: "0.2s" }}>
            Estilo e tradição em cada corte
          </p>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')] opacity-5 bg-fixed bg-center bg-cover" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Nossos Serviços
            </h2>
            <p className="text-yellow-500 max-w-2xl mx-auto text-lg italic">
              Oferecemos uma variedade de serviços profissionais para manter você no seu melhor estilo
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-barber-800 to-black p-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-yellow-900/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-yellow-500 mb-6">
                  <Scissors className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-yellow-500 font-bold text-2xl">R$ {service.price}</p>
              </div>
            ))}


          </div>

        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-3 rounded-md font-medium hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Clique Aqui Para Mais
          </button>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-barber-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')] opacity-5 bg-fixed bg-center bg-cover" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Nosso Portfólio
            </h2>
            <p className="text-yellow-500 max-w-2xl mx-auto text-lg italic">
              Confira alguns dos nossos melhores trabalhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg aspect-square transform hover:scale-105 transition-all duration-500 border-2 border-yellow-900/30"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{item.title}</h3>
                    <p className="text-yellow-500 italic">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')] opacity-5 bg-fixed bg-center bg-cover" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Contato
            </h2>
            <p className="text-yellow-500 max-w-2xl mx-auto text-lg italic">
              Entre em contato conosco ou visite nossa barbearia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard
              icon={Clock}
              title="Horário de Funcionamento"
              content="Seg - Sáb: 9h às 20h"
            />
            <ContactCard
              icon={MapPin}
              title="Localização"
              content="Rua da Barbearia, 123"
            />
            <ContactCard
              icon={Phone}
              title="Telefone"
              content="(11) 99999-9999"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Corte Clássico",
    description: "Corte tradicional com acabamento impecável e produtos premium",
    price: "50",
  },
  {
    title: "Barba",
    description: "Modelagem e hidratação completa da barba com toalha quente",
    price: "40",
  },
  {
    title: "Combo Premium",
    description: "Corte + barba com produtos premium e massagem relaxante",
    price: "80",
  },
];

const portfolioItems = [
  {
    title: "Corte Moderno",
    description: "Estilo contemporâneo com técnicas avançadas",
    image: "https://images.pexels.com/photos/2040190/pexels-photo-2040190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Barba Tradicional",
    description: "Modelagem clássica com produtos importados",
    image: "https://th.bing.com/th/id/OIP.F7Fone_hQNJxyF-gCmADLwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Combo Premium",
    description: "Experiência completa de cuidados masculinos",
    image: "https://th.bing.com/th/id/OIP.bjY4DJbJS39sVZayYoASfQHaE7?rs=1&pid=ImgDetMain",
  },
];

const ContactCard = ({
  icon: Icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) => (
  <div className="bg-gradient-to-br from-barber-800 to-black p-8 rounded-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-yellow-900/30">
    <div className="text-yellow-500 mb-6 flex justify-center">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 font-serif">{title}</h3>
    <p className="text-gray-400">{content}</p>
  </div>
);

export default Index;
