import type { Metadata } from "next";

import "@/styles/globals.css";
import { Inter, Pacifico, Pirata_One } from "next/font/google";

import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const pacifico = Pacifico({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-pacifico",
});

const pirateOne = Pirata_One({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-pirate-one",
});

export const metadata: Metadata = {
	title: "XXXIX Olimpíada Interna - Colégio Santo Inácio",
	description: "Programação da XXXIX Olimpíada Interna do Colégio Santo Inácio",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" className="antialiased" suppressHydrationWarning>
			<body
				className={cn(
					"dark min-h-screen font-sans antialiased",
					inter.variable,
					pacifico.variable,
					pirateOne.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
