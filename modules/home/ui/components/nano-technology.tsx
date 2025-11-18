import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "@/constants";
import { CheckCircle, ArrowRight, Droplet, Cog, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const NanoTechnology = () => {
	return (
		<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <Image
      width={600}
      height={600}
      src={"/images/nanotech-bg.jpg"}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <div className="inline-block">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Advanced Technology
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Advanced{" "}
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Nanotechnology
          </span>{" "}
          Formulation
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          dubcan utilizes cutting-edge nanotechnology to create dubcanlube
          that provide unmatched protection and performance. Our
          formulations are designed to meet the demanding requirements of
          modern engines and machinery.
        </p>
        <div className="space-y-4 pt-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-slate-900 leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Link href="/about">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-6 h-auto text-lg hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Card className="border-slate-200 bg-linear-to-br from-white to-slate-50 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group">
          <CardHeader>
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-500">
              <Droplet className="h-10 w-10 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Quality First</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Only top-quality dubcanlube using the latest innovative
              technology
            </p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 bg-linear-to-br from-white to-slate-50 backdrop-blur hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2 transition-all duration-500 group mt-8">
          <CardHeader>
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-500">
              <Cog className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-lg">Reliability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ensures excellent performance and longevity for your equipment
            </p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 bg-linear-to-br from-white to-slate-50 backdrop-blur hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 group md:col-span-2">
          <CardHeader>
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-500">
              <Award className="h-10 w-10 text-orange-600" />
            </div>
            <CardTitle className="text-lg">
              Industry Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certified by the American Petroleum Institute (API) and meets
              or exceeds SAE, ILSAC standards
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
	);
};
