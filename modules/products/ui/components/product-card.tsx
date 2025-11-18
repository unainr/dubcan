import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

interface ProductCardProps {
  name: string;
  sae: string;
  api: string;
  type: string;
  description: string;
  packs: string[];
  features?: string[];
}

const ProductCard = ({ name, sae, api, type, description, packs, features }: ProductCardProps) => {
  return (
   <div className="group overflow-hidden border-gray-200 bg-white transition-all rounded-lg duration-300 hover:scale-[1.02] hover:border-orange-500/50 hover:shadow-lg">
  <div className="relative overflow-hidden bg-linear-to-br from-slate-800 to-slate-900 p-6">
    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl transition-all group-hover:bg-orange-500/20"></div>
    <div className="relative">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="mb-1 text-2xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{type}</p>
        </div>
        <Package className="h-8 w-8 text-orange-500" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30">
          SAE {sae}
        </Badge>
        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30">
          API {api}
        </Badge>
      </div>
    </div>
  </div>
  
  <div className="p-6">
    <p className="mb-4 text-sm leading-relaxed text-gray-600">
      {description}
    </p>
    
    {features && features.length > 0 && (
      <div className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
            <span className="text-sm font-medium text-gray-800">{feature}</span>
          </div>
        ))}
      </div>
    )}
    
    <div className="border-t border-gray-200 pt-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Available Packs
      </p>
      <div className="flex flex-wrap gap-2">
        {packs.map((pack, index) => (
          <span
            key={index}
            className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-orange-500 hover:text-white"
          >
            {pack}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
