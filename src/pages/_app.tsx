import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { AppShell, Box, Stack } from "@mantine/core";
import { Socials, Sidebar, Navbar } from "../components";
import { useState } from "react";
import SideElements from "src/components/SideElements";

function App({ Component, pageProps }: AppProps) {
	const [sidebarOpened, setSidebarOpened] = useState(false);
	return (
		<>
			<Head>
				<title>Suhail's Portfolio</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<AppShell
				classNames={{
					root: "bg-primary",
					main: "p-0",
				}}
				aside={<Sidebar sidebarOpened={sidebarOpened} />}
				header={
					<Navbar
						sidebarOpened={sidebarOpened}
						setSidebarOpened={setSidebarOpened}
					/>
				}
			>
				<SideElements />
				<Component {...pageProps} />
			</AppShell>
		</>
	);
}

export default App;
