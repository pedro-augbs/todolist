import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

import { TanstackProvider } from "@/providers/TanstackProvider";
import { Toaster } from "sonner";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Todo List",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<TanstackProvider>
			<html lang="en" className={`${montserrat.variable}`}>
				<body suppressHydrationWarning className="min-h-screen bg-foreground">
					{children}
					<Toaster />
				</body>
			</html>
		</TanstackProvider>
	);
}
