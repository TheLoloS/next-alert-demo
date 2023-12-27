import { AlertProvider } from "next-alert";
import Box from "./components/Box";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<AlertProvider>
				<Box />
			</AlertProvider>
		</main>
	);
}
