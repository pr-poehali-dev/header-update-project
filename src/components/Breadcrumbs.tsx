import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Icon from '@/components/ui/icon';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="bg-gray-50 border-b py-2 px-4">
      <div className="container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1 text-sm hover:text-[hsl(var(--green-header))]">
                <Icon name="Home" size={14} />
                <span>Главная</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <BreadcrumbSeparator>
                  <Icon name="ChevronRight" size={14} />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {index === items.length - 1 ? (
                    <BreadcrumbPage className="text-sm">{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      href={item.href || '#'} 
                      className="text-sm hover:text-[hsl(var(--green-header))]"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
