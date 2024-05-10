import type { Metadata } from "next";

import "@/styles/globals.css";
import { Inter as FontSans, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "XXXIX Olimpíada Interna - Colégio Santo Inácio",
	description: "Programação da XXXIX Olimpíada Interna do Colégio Santo Inácio",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"dark min-h-screen font-sans antialiased",
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
