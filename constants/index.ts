import {
	Award,
	Building2,
	Factory,
	Globe,
	Shield,
	Ship,
	TrendingUp,
	Truck,
	Users,
	Zap,
} from "lucide-react";

export const features = [
	{
		icon: Shield,
		title: "Superior Protection",
		description:
			"Advanced formulations that protect engines and machinery under extreme conditions",
	},
	{
		icon: Zap,
		title: "Enhanced Performance",
		description:
			"Maximize efficiency and power output with our cutting-edge dubcanlube",
	},
	{
		icon: Award,
		title: "API Certified",
		description:
			"Meeting or exceeding SAE, API, ILSAC, and industry specifications",
	},
	{
		icon: TrendingUp,
		title: "Extended Service Life",
		description: "Reduce maintenance costs with longer-lasting protection",
	},
];

export const productCategories = [
	{
		name: "Engine Motor Oil",
		description: "Heavy-duty diesel engine oils for maximum protection",
		image: "/images/product-motor-oil.jpg",
		link: "/products",
	},
	{
		name: "Gear Oil",
		description: "Full synthetic gear oils for extreme conditions",
		image: "/images/productimage.jpg",
		link: "/products",
	},
	{
		name: "Grease",
		description: "Multi-purpose lithium grease for industrial applications",
		image: "/images/product-grease.png",
		link: "/products",
	},
];

export const benefits = [
	"Nanotechnology formulation for superior performance",
	"Meets or exceeds latest industry standards",
	"Suitable for heavy-duty and extreme conditions",
	"Extended equipment life and reduced downtime",
	"Excellent thermal and oxidative stability",
	"Professional customer support",
];

export const stats = [
	{ number: "25+", label: "Years of Excellence", icon: Award },
	{ number: "500+", label: "Global Clients", icon: Users },
	{ number: "50+", label: "Countries Served", icon: Globe },
	{ number: "100%", label: "API Certified", icon: Shield },
];

export const industries = [
	{
		icon: Truck,
		title: "Transportation",
		description:
			"Heavy-duty diesel engines, commercial fleets, and long-haul trucking operations",
	},
	{
		icon: Factory,
		title: "Manufacturing",
		description:
			"Industrial machinery, production lines, and automated manufacturing equipment",
	},
	{
		icon: Building2,
		title: "Construction",
		description:
			"Heavy equipment, excavators, bulldozers, and construction machinery",
	},
	{
		icon: Ship,
		title: "Marine & Mining",
		description:
			"Marine engines, offshore equipment, and heavy mining machinery",
	},
];

export const process = [
	{
		step: "01",
		title: "Consultation",
		description:
			"Discuss your specific Dubcanlube needs and equipment requirements with our experts",
	},
	{
		step: "02",
		title: "Recommendation",
		description:
			"Receive tailored product recommendations based on your industry and applications",
	},
	{
		step: "03",
		title: "Testing & Approval",
		description:
			"Optional product testing and performance validation for your specific use case",
	},
	{
		step: "04",
		title: "Supply & Support",
		description:
			"Reliable delivery and ongoing technical support for optimal performance",
	},
];

export const faqs = [
	{
		question: "What makesdubcan dubcanlube different from competitors?",
		answer:
			"dubcan uses advanced nanotechnology formulation that provides superior protection and performance. Our products are API certified and meet or exceed SAE, ILSAC, and industry specifications, ensuring optimal performance even in extreme conditions.",
	},
	{
		question: "Aredubcan products suitable for heavy-duty applications?",
		answer:
			"Yes, absolutely. Our dubcanlube are specifically engineered for heavy-duty diesel engines, industrial machinery, and demanding applications. They provide excellent thermal stability, oxidative resistance, and extended equipment life.",
	},
	{
		question: "What certifications dodubcan products have?",
		answer:
			"Alldubcan products are certified by the American Petroleum Institute (API) and meet or exceed SAE, ILSAC, and other relevant industry standards. We maintain strict quality control to ensure consistent performance.",
	},
	{
		question: "How do I choose the right Dubcanlube for my equipment?",
		answer:
			"Our technical team can help you select the perfect Dubcanlube based on your equipment type, operating conditions, and manufacturer recommendations. Contact us for a free consultation and product recommendation.",
	},
	{
		question: "Do you offer bulk ordering and delivery?",
		answer:
			"Yes, we offer flexible ordering options including bulk orders for industrial and commercial clients. We provide reliable delivery services and can work with you to establish a regular supply schedule.",
	},
	{
		question: "What is the shelf life ofdubcan products?",
		answer:
			"When stored properly in sealed containers away from extreme temperatures,dubcan dubcanlube have a shelf life of 3-5 years. Always check the manufacturing date on the container and follow storage guidelines.",
	},
];

export const brandButtonColorClasses =
  "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white";

export const motorEngineOils = [
	{
		name: "Dubcanlube MEO 5W20",
		sae: "5W-20",
		api: "SP",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: [
			"Eco-Friendly Formulation",
			"Active Shield Protection",
			"All-Season Performance",
		],
	},
	{
		name: "Dubcanlube MEO 5W30",
		sae: "5W-30",
		api: "SP",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: [
			"Eco-Friendly Formulation",
			"Active Shield Protection",
			"Superior Engine Cleanliness",
		],
	},
	{
		name: "Dubcanlube MEO 5W40",
		sae: "5W-40",
		api: "SP",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: [
			"Eco-Friendly Formulation",
			"Active Shield Protection",
			"Enhanced Wear Protection",
		],
	},
	{
		name: "Dubcanlube MEO 10W40",
		sae: "10W-40",
		api: "SN",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: [
			"High Temperature Stability",
			"Exceptional Oxidation Resistance",
		],
	},
	{
		name: "Dubcanlube MEO 15W40",
		sae: "15W-40",
		api: "SN",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: ["Heavy-Duty Performance", "Long Oil Life"],
	},
	{
		name: "Dubcanlube MEO 20W50",
		sae: "20W-50",
		api: "SN",
		type: "Fully Synthetic",
		description:
			"Fully Synthetic high performance engine oil for passenger cars. Suitable for a wide range of applications (turbo charged and super charged gasoline powered passenger cars) and in all seasons. Innovative oil formulated from premium quality base stocks combined with modern performance additives.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: ["Maximum Protection", "High Load Capacity"],
	},
];

export const dieselEngineOils = [
	{
		name: "Dubcanlube DEO 15W40",
		sae: "15W-40",
		api: "CI-4",
		type: "Heavy Duty Diesel",
		description:
			"Heavy duty diesel engine oil designed for modern diesel engines. Provides excellent protection against wear, deposits, and oxidation. Suitable for use in both on-highway and off-highway applications.",
		packs: ["4L", "5L", "20L", "208L"],
		features: [
			"Heavy Duty Protection",
			"Extended Drain Intervals",
			"Reduced Emissions",
		],
	},
	{
		name: "Dubcanlube DEO 20W50",
		sae: "20W-50",
		api: "CI-4",
		type: "Heavy Duty Diesel",
		description:
			"Premium heavy duty diesel engine oil for demanding applications. Excellent soot control and wear protection for diesel engines operating under severe conditions.",
		packs: ["4L", "5L", "20L", "208L"],
		features: [
			"Superior Soot Control",
			"Enhanced Wear Protection",
			"High Temperature Performance",
		],
	},
];

export const transmissionFluids = [
	{
		name: "Dubcanlube ATF DEXRON-IV",
		sae: "ATF",
		api: "DEXRON-IV",
		type: "Automatic Transmission Fluid",
		description:
			"High-quality automatic transmission fluid formulated to meet DEXRON-IV specifications. Provides smooth shifting, excellent thermal stability, and superior protection for automatic transmissions.",
		packs: ["1L", "4L", "20L", "208L"],
		features: ["Smooth Shifting", "Oxidation Resistance", "Seal Compatibility"],
	},
];

export const gearOils = [
	{
		name: "Dubcanlube GL-5 75W90",
		sae: "75W-90",
		api: "GL-5",
		type: "Heavy Duty Gear Oil",
		description:
			"Premium heavy duty gear oil designed for manual transmissions, differentials, and final drives. Provides excellent extreme pressure protection and thermal stability.",
		packs: ["1L", "4L", "5L", "20L", "208L"],
		features: [
			"Extreme Pressure Protection",
			"Enhanced Fuel Economy",
			"Low Temperature Fluidity",
		],
	},
];
