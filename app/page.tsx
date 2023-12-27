import { AlertProvider } from "next-alert";
import Box from "./components/Box";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next-Alert Demo",
	description: "Next-Alert Demo",
};


export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<AlertProvider>
				<Box />
			</AlertProvider>
		</main>
	);
}
