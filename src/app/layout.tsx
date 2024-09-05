import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MCU APP - Developped by Kyllian Vibancos",
	description: "Look at every MCU Movie and TV shows",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Toaster position="top-right" />
				<ToastContainer position="top-right" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
