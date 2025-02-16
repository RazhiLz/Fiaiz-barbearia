
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Scissors, Star, DollarSign, Clock, Sparkles, Crown } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";



const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-barber-900 to-black">
      <Navbar />


      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">



        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')] bg-cover bg-center bg-fixed opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-barber-900/90" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-10 h-10 text-yellow-500 animate-pulse mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
              Nossos Serviços
            </h1>
            <Crown className="w-10 h-10 text-yellow-500 animate-pulse ml-3" />
          </div>
          <p className="text-xl md:text-2xl text-yellow-500 italic">
            Excelência em cada detalhe
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')] opacity-5 bg-fixed bg-center bg-cover" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                <div className="relative bg-gradient-to-br from-barber-800 to-black p-8 rounded-lg border border-yellow-900/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/70">
                  <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transform rotate-12 text-sm">
                    R$ {service.price}
                  </div>
                  <div className={`text-yellow-500 mb-6 transform transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>
                    <service.icon className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-yellow-500">{service.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Corte Premium",
    description: "Experimente o mais alto padrão em cortes masculinos com produtos importados e técnicas exclusivas.",
    price: "80",
    icon: Scissors,
    duration: "45 min",
    level: "Premium",
    includes: [
      "Consulta de estilo",
      "Produtos importados",
      "Massagem capilar",
      "Finalização premium"
    ]
  },
  {
    title: "Barba Luxo",
    description: "Tratamento completo para sua barba com toalhas quentes e óleos essenciais importados.",
    price: "60",
    icon: Scissors,
    duration: "40 min",
    level: "Luxo",
    includes: [
      "Toalha quente",
      "Óleos essenciais",
      "Hidratação profunda",
      "Design personalizado"
    ]
  },
  {
    title: "Combo Imperial",
    description: "A experiência completa de cuidados masculinos com todos os nossos serviços premium.",
    price: "120",
    icon: Crown,
    duration: "90 min",
    level: "Imperial",
    includes: [
      "Corte premium",
      "Barba luxo",
      "Hidratação VIP",
      "Bebida cortesia"
    ]
  },
  {
    title: "Corte Clássico",
    description: "Corte tradicional com acabamento impecável e produtos de primeira linha.",
    price: "50",
    icon: Scissors,
    duration: "30 min",
    level: "Clássico",
    includes: [
      "Lavagem",
      "Corte tradicional",
      "Finalização",
      "Produtos selecionados"
    ]
  },
  {
    title: "Barba Express",
    description: "Modelagem rápida e eficiente para quem precisa manter o visual em dia.",
    price: "40",
    icon: Scissors,
    duration: "25 min",
    level: "Express",
    includes: [
      "Aparagem",
      "Alinhamento",
      "Hidratação básica",
      "Finalização"
    ]
  },
  {
    title: "Combo Classic",
    description: "A combinação perfeita de corte e barba para o dia a dia.",
    price: "80",
    icon: Star,
    duration: "60 min",
    level: "Classic",
    includes: [
      "Corte clássico",
      "Barba express",
      "Produtos premium",
      "Finalização"
    ]
  }
];

export default Services;
