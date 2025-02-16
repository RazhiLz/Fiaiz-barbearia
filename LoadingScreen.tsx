
import { useEffect, useState } from "react";
import { Scissors, Sparkles } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black">
     
      
      <div className="h-full flex flex-col items-center justify-center">
        <div className="relative">
          <Scissors className="w-20 h-20 text-yellow-500 animate-spin" />
        </div>
        
        <div className="mt-8 w-64 h-2 bg-barber-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-yellow-500 font-robot text-xl">
          Carregando Serviços...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
