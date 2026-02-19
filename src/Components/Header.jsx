import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header
      className="relative bg-black text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/img/image-101 .png')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10 flex flex-col gap-24">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-12">
            <div className="bg-gray-400/30 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center font-bold border border-white/20">
              AM
            </div>

            <nav className="hidden lg:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
              <a href="#" className="hover:text-green-400 transition">
                Каталог
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Доставка и оплата
              </a>
              <a href="#" className="hover:text-green-400 transition">
                О нас
              </a>
              <a href="#" className="hover:text-green-400 transition">
                Контакты
              </a>
              <a href="#" className="hover:text-green-400 transition">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-2 cursor-pointer group">
              <Search
                size={18}
                className="group-hover:text-green-400 transition"
              />
              <span className="text-xs uppercase tracking-widest group-hover:text-green-400 transition">
                поиск
              </span>
            </div>
          </div>

          <div className="text-right space-y-6">
            <div className="group">
              <h2 className="text-green-400 font-semibold text-sm tracking-widest cursor-pointer">
                zakaz@loverflower.by
              </h2>
              <p className="text-gray-300 text-[10px] mt-1 leading-relaxed opacity-80">
                Доставка 24/7 по договоренности <br /> с оператором
              </p>
            </div>

            <div>
              <h2 className="text-green-400 font-semibold text-sm tracking-widest">
                ул. Тимирязева 67
              </h2>
              <p className="text-gray-300 text-[10px] mt-1 leading-relaxed opacity-80">
                10:00 до 21:00 без выходных
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-Cormorant text-white uppercase text-9xl md:text-[120px] font-light">
            Lover <br />
            <span className="italic font-Cormorant text-green-200/80">
              Flower
            </span>
          </h1>

          <p className="text-gray-300 mt-4 text-center max-w-md">
            Создаём для тех, кто ценит свежесть и изящество цветка
          </p>

          <button className="mt-16 px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 uppercase text-xs tracking-[0.3em]">
            смотреть каталог
          </button>
        </div>
        <img
          src="/src/img/lover flower.png"
          alt="Lover Flower Logo"
          className="absolute bottom-0 right-0 w-1/3 md:w-1/4"
        />
      </div>
    </header>
  );
};

export default Header;
