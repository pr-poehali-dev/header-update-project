import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs items={[]} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[hsl(var(--green-header))]">
            Добро пожаловать в РОСЛЕКС
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Торговая организация электроники и комплектующих
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[hsl(var(--green-header))] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Широкий ассортимент</h3>
              <p className="text-gray-600">Электроника и комплектующие для любых задач</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[hsl(var(--green-header))] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим ваш заказ в кратчайшие сроки</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[hsl(var(--green-header))] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Выгодные цены</h3>
              <p className="text-gray-600">Конкурентные цены на весь товар</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;