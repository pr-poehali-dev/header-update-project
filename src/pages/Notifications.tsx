import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

interface NotificationItem {
  id: number;
  notification: string;
  warning: string;
  severity: 'critical' | 'warning';
}

const Notifications = () => {
  const notifications: NotificationItem[] = [
    {
      id: 1,
      notification: 'У вас нет организаций',
      warning: 'Вы не можете совершать заказы',
      severity: 'critical'
    },
    {
      id: 2,
      notification: 'Не заполнен номер компании',
      warning: 'Не дает потенциальным покупателям увидеть вашу контактную информацию',
      severity: 'warning'
    },
    {
      id: 3,
      notification: 'Не указан адрес доставки',
      warning: 'Задержки при оформлении заказов',
      severity: 'warning'
    },
    {
      id: 4,
      notification: 'Не подтвержден email',
      warning: 'Вы не получаете важные уведомления о заказах',
      severity: 'warning'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Уведомления и Предупреждения' }]} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[hsl(var(--green-header))] mb-2">
            Уведомления и Предупреждения
          </h1>
          <p className="text-gray-600">
            Обратите внимание на важные уведомления о вашем аккаунте
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
            <div className="px-6 py-4 font-bold text-gray-700 border-r border-gray-200">
              УВЕДОМЛЕНИЕ
            </div>
            <div className="px-6 py-4 font-bold text-gray-700">
              ПРЕДУПРЕЖДЕНИЕ
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-2 transition-colors ${
                  item.severity === 'critical'
                    ? 'bg-red-50 hover:bg-red-100'
                    : 'bg-yellow-50 hover:bg-yellow-100'
                }`}
              >
                <div className="px-6 py-4 border-r border-gray-200 flex items-start gap-3">
                  <Icon 
                    name={item.severity === 'critical' ? 'AlertCircle' : 'AlertTriangle'} 
                    size={20}
                    className={item.severity === 'critical' ? 'text-red-600 mt-0.5' : 'text-yellow-600 mt-0.5'}
                  />
                  <span className={`font-medium ${
                    item.severity === 'critical' ? 'text-red-900' : 'text-yellow-900'
                  }`}>
                    {item.notification}
                  </span>
                </div>
                <div className="px-6 py-4 flex items-center">
                  <span className={`text-sm ${
                    item.severity === 'critical' ? 'text-red-800' : 'text-yellow-800'
                  }`}>
                    {item.warning}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
            <span className="text-gray-600">Критическое - требует немедленного внимания</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
            <span className="text-gray-600">Предупреждение - рекомендуется исправить</span>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notifications;