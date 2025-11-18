import ProductCard from "./product-card";

interface Product {
  name: string;
  sae: string;
  api: string;
  type: string;
  description: string;
  packs: string[];
  features?: string[];
}

interface CategorySectionProps {
  title: string;
  description?: string;
  products: Product[];
}

const CategorySection = ({ title, description, products }: CategorySectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-foreground lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-accent"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
