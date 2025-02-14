"use client"

import ClientProvider from "./components/ClientProvider"
import './globals.css'
import { Providers } from "./GlobalRedux/provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function App({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<RootLayout>
				{children}
			</RootLayout>
		</QueryClientProvider >
	)
}

function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div>
					{/* Header */}
					{/* <Header /> */}

					{/* Notifications */}
					<ClientProvider />
					<div className="flex flex-row items-center">
						<div className="bg-slate-600 flex-1 h-screen p-10 items-center">
							<Providers>
								{children}
							</Providers>
						</div>
					</div>
				</div>
			</body>
		</html >
	)
}
