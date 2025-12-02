import Icon from '@/components/ui/icon';
import { useLocation } from 'react-router-dom';

interface SeoContent {
  [key: string]: string;
}

const Footer = () => {
  const location = useLocation();

  const seoContent: SeoContent = {
    '/': 'Росдекс (Rosdex.ru) – портал поставщиков, агрегатор поставщиков России и масштабная торговая площадка для B2B-сегмента. Наш портал создан для того, чтобы кардинально упростить поиск поставщиков и сделать оптовые закупки эффективными и прозрачными. Мы собрали на одной платформе закупки проверенных оптовых поставщиков и производителей со всей страны. Покупатели получают прямой доступ к актуальным данным: видят цены и остатки товаров в реальном времени, напрямую из учетных систем продавцов. Росдекс предоставляет возможность сравнить цены всех поставщиков в одном окне и купить товары оптом по наилучшим условиям.',
    '/notifications': 'Каталог товаров для оптовых закупок, где собраны тысячи предложений от надежных поставщиков со всей России. Если вы ищете, где купить товары оптом выгодно и быстро с возможностью сравнивать цены у разных поставщиков — наш сервис создан для вас. Здесь представлен обширный каталог товаров оптовиков, который включает актуальные цены и остатки напрямую от производителей и дистрибьюторов. В нашей базе — более 584 798 товаров от проверенных оптовиков.',
    default: 'Росдекс — ваш надежный партнер для оптовых закупок. Сравнивайте цены, выбирайте поставщиков и работайте напрямую без посредников.'
  };

  const currentSeoText = seoContent[location.pathname] || seoContent.default;

  const currencies = [
    { code: 'USD', rate: '96.50', change: '+0.45' },
    { code: 'EUR', rate: '105.20', change: '-0.30' },
    { code: 'CNY', rate: '13.40', change: '+0.10' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-[hsl(var(--green-header))] mb-4 text-lg">
              О сервисе
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[hsl(var(--green-header))] mb-4 text-lg">
              Документы
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Документация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[hsl(var(--green-header))] mb-4 text-lg">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[hsl(var(--green-header))] transition-colors">
                  Обратная связь
                </a>
              </li>
              <li>
                <a href="tel:+78005550053" className="text-gray-900 font-semibold hover:text-[hsl(var(--green-header))] transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-00-53
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[hsl(var(--green-header))] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Telegram">
                  <Icon name="Send" size={16} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[hsl(var(--green-header))] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="WhatsApp">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[hsl(var(--green-header))] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Mail">
                  <Icon name="Mail" size={16} className="text-white" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[hsl(var(--green-header))] mb-4 text-lg">
              Курсы валют
            </h3>
            <div className="space-y-2">
              {currencies.map((currency) => (
                <div key={currency.code} className="flex items-center justify-between bg-white p-2 rounded border border-gray-200">
                  <span className="font-medium text-gray-900">{currency.code}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{currency.rate} ₽</div>
                    <div className={`text-xs ${currency.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {currency.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 text-sm leading-relaxed">
            {currentSeoText}
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              РОСДЕКС © 2025
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Icon name="MapPin" size={14} />
              <span>АЛМАТЫ, КАЗ.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
