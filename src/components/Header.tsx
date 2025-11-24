import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('Главная');
  
  const mainNavItems = [
    'Главная',
    'О компании', 
    'Тарифы',
    'Услуги',
    'Контакты',
    'Вопросы и ответы',
    'Новости'
  ];

  const categoryItems = [
    'ЭЛЕКТРОНИКА',
    'БРЕНД ДОСТАВКИ',
    'ТОВАР',
    'КОМПЛЕКТУЮЩИЕ',
    'ЦЕНА'
  ];

  return (
    <header className="w-full">
      <div className="bg-[hsl(var(--green-header))] text-white py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={14} />
              <span>АЛМАТЫ, КАЗ.</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={14} />
              <span>8 800 1 555-13-55</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>ВОПРОСЕ</span>
            <span>ТАРИФЫ</span>
            <span>ОБРАТНАЯ СВЯЗЬ</span>
            <span className="flex items-center gap-1">
              <Icon name="Phone" size={14} />
              +7-105-24 & 11-10-41-9
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(var(--green-header))] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">Р</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-[hsl(var(--green-header))]">РОСЛЕКС</span>
              <span className="text-[10px] text-gray-600">Торговая организация</span>
            </div>
          </div>

          <nav className="flex items-center gap-1">
            {mainNavItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeSection === item
                    ? 'text-[hsl(var(--green-header))] border-b-2 border-[hsl(var(--green-header))]'
                    : 'text-gray-700 hover:text-[hsl(var(--green-header))]'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 min-w-[300px]">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Поиск..."
                className="pr-8 h-9 text-sm"
              />
              <Icon
                name="Search"
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Icon name="User" size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Icon name="ShoppingCart" size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(var(--gray-nav))] py-2 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-6">
            {categoryItems.map((item) => (
              <button
                key={item}
                className="text-sm font-medium text-gray-700 hover:text-[hsl(var(--green-header))] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="text-sm text-gray-700 hover:text-[hsl(var(--green-header))] flex items-center gap-1">
            <span>СТАТЬИ</span>
            <Icon name="ChevronDown" size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
