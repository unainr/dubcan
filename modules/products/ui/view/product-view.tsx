import {
	dieselEngineOils,
	gearOils,
	motorEngineOils,
	transmissionFluids,
} from "@/constants";
import CategorySection from "../components/category-section";
import Banner from "@/components/banner";

export const ProductView = () => {
	return (
		<>
		<Banner linkText="product" title="Proudcts" />
		<div className="min-h-screen bg-background">
			<CategorySection
				title="Motor Engine Oils"
				description="Premium fully synthetic engine oils designed for maximum performance and protection"
				products={motorEngineOils}
			/>

			<div className="border-t border-border/30"></div>

			<CategorySection
				title="Heavy Duty Diesel Engine Oils"
				description="Professional-grade oils engineered for demanding diesel applications"
				products={dieselEngineOils}
			/>

			<div className="border-t border-border/30"></div>

			<CategorySection
				title="Transmission Fluids"
				description="Advanced fluids for smooth and reliable transmission performance"
				products={transmissionFluids}
			/>

			<div className="border-t border-border/30"></div>

			<CategorySection
				title="Gear Oils"
				description="High-performance gear oils for superior protection under extreme conditions"
				products={gearOils}
			/>

			
		</div>
		</>
	);
};
