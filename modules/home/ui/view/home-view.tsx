import { CTA } from "../components/CTA";
import { FAQ } from "../components/faq-section";
import { Featured } from "../components/featured-section";
import { HeroSection } from "../components/hero-section";
import { IndustaryApplication } from "../components/industary-application";
import { NanoTechnology } from "../components/nano-technology";
import { OurProcess } from "../components/our-process";
import { ProductCategories } from "../components/product-categories";
import { Stats } from "../components/stats";

export const HomeView = () => {
	return <>
    <HeroSection/>
    <Stats/>
    <Featured/>
    <ProductCategories/>
    <IndustaryApplication/>
    <NanoTechnology/>
    <OurProcess/>
    <FAQ/>
    <CTA/>
    </>;
};
