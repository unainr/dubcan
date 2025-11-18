"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			}`}>
			<div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>
					<Link
						href="/about"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/about") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						About
					</Link>
					<Link
						href="/products"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/products") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						Products
					</Link>

					<Link
						href="/event"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/event") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						Event
					</Link>
					<Link
						href="/pricing"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/pricing") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						Pricing
					</Link>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					<Link href={"/contact"}>
						<Button
							className={cn(
								"font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
								isScrolled
									? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
									: "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
							)}>
							Get Quote
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									"transition-colors",
									isScrolled
										? "text-slate-700 dark:text-slate-200"
										: "text-white"
								)}>
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[250px] sm:w-[300px] bg-white dark:bg-slate-900">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
										isActive("/") &&
											"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/about"
									className={cn(
										"text-sm font-medium transition-colors text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
										isActive("/about") &&
											"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
									)}>
									About
								</Link>
							<Link
						href="/products"
						className={cn(
							"text-sm font-medium transition-colors",
							!isScrolled && "text-white/90 hover:text-white",
							isScrolled &&
								"text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
							isActive("/products") &&
								"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
						)}>
						Products
					</Link>

								<Link
									href="/event"
									className={cn(
										"text-sm font-medium transition-colors text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
										isActive("/event") &&
											"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
									)}>
									Event
								</Link>
								<Link
									href="/pricing"
									className={cn(
										"text-sm font-medium transition-colors text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400",
										isActive("/pricing") &&
											"text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4"
									)}>
									Pricing
								</Link>

								<Link href={"/contact"}>
									<Button className="mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
										Get Quote
									</Button>
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
