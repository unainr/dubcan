import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { features } from "@/constants";

export const Featured = () => {
	return (
		<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Our Advantage
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Why Choose <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Dubcan?</span>
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Industry-leading dubcanlube powered by advanced nanotechnology
        formulation
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="group border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <CardHeader className="relative z-10">
            <div className="w-14 h-14 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-purple-600 transition-colors duration-500" />
            </div>
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <CardDescription className="text-slate-600 leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
	);
};
