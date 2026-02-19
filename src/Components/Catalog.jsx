import React from "react";

const Catalog = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#061a1a] to-[#021212] text-white py-28 px-6">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/30 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-serif tracking-widest mb-10">
          Каталог
        </h2>

        <p className="text-gray-300 max-w-xl mb-16 leading-relaxed">
          У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
          всегда поможем вам подобрать букет для вашего события, наш менеджер
          вас проконсультирует и поможет определиться с выбором.
          <br />
          <br />
          Ознакомьтесь с нашими разделами каталога
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-teal-400 text-xl font-semibold uppercase tracking-widest mb-6">
              Цветы
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Сборные букеты</li>
              <li>• Монобукеты</li>
              <li>• Композиции из цветов</li>
              <li>• Розы</li>
              <li>• Свадебные</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-teal-400 text-xl font-semibold uppercase tracking-widest mb-6">
              Готовые букеты из сухоцветов
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Букеты</li>
              <li>• Для интерьера</li>
              <li>• Композиции</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl md:col-span-2 md:w-1/2">
            <h3 className="text-teal-400 text-xl font-semibold uppercase tracking-widest mb-6">
              Дополнительно
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Шары</li>
              <li>• Игрушки</li>
              <li>• Открытки</li>
              <li>• Упаковка</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
