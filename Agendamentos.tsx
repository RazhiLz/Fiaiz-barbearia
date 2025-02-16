import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { Scissors, Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';




const services = [
  { id: 1, name: 'Corte Degradê', duration: '45min', price: 'R$ 50' },
  { id: 2, name: 'Barba', duration: '30min', price: 'R$ 35' },
  { id: 3, name: 'Corte + Barba', duration: '1h15min', price: 'R$ 75' },
  { id: 4, name: 'Sobrancelha', duration: '15min', price: 'R$ 20' },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleWhatsAppClick = () => {
    // Replace this number with your actual WhatsApp number
    const phoneNumber = '5511999999999';
    const message = 'Olá! Gostaria de agendar um horário na Barbearia Fiaiz.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
      <Navbar />
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
          alt="Barbershop"
          className="w-full h-full object-cover "
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        
          <div className="text-center">
          
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700]">Agendamento - FIAIZ</h1>
            
          </div>
        </div>
      </div>

      {/* Scheduling Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-zinc-900 p-8 rounded-lg border-2 border-[#FFD700]">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700] flex items-center justify-center gap-2">
            <Scissors className="w-8 h-8" />
            Agende seu Horário
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Services Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Serviços</h3>
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.name)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedService === service.name
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{service.name}</span>
                    <span>{service.price}</span>
                  </div>
                  <div className="text-sm opacity-75 mt-1">Duração: {service.duration}</div>
                </div>
              ))}
            </div>

            {/* Date and Time Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Data
                </h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-lg bg-zinc-800 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Horário
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? 'bg-[#FFD700] text-black'
                          : 'bg-zinc-800 hover:bg-zinc-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Suas Informações</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-[#FFD700]" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full p-3 pl-12 rounded-lg bg-zinc-800 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-[#FFD700]" />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full p-3 pl-12 rounded-lg bg-zinc-800 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
              <div className="relative md:col-span-2">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-[#FFD700]" />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full p-3 pl-12 rounded-lg bg-zinc-800 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-8 bg-[#FFD700] text-black py-4 rounded-lg font-bold text-lg hover:bg-[#E5C100] transition-colors">
            Confirmar Agendamento
          </button>

          {/* WhatsApp Section */}
          <div className="mt-8 pt-8 border-t-2 border-[#FFD700] text-center">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Está com problemas?</h3>
            <p className="text-gray-300 mb-4">Tente agendar pelo WhatsApp!</p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;