import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/constants";

export const IndustaryApplication = () => {
	return (
	<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Industries We Serve
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Trusted Across{" "}
        <span className="text-blue-600">Multiple Industries</span>
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Our advanced dubcanlube power operations across diverse sectors
        worldwide
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {industries.map((industry, index) => (
        <Card
          key={index}
          className="group border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <CardHeader className="relative z-10">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <industry.icon className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
              {industry.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-slate-600 leading-relaxed">
              {industry.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
	);
};
