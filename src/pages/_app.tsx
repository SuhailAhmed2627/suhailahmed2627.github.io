import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/index.css";
import { AppShell } from "@mantine/core";
import { Sidebar, Navbar } from "../components";
import { useState } from "react";
import SideElements from "src/components/SideElements";

function App({ Component, pageProps }: AppProps) {
	const [sidebarOpened, setSidebarOpened] = useState(false);
	return (
		<>
			<Head>
				<title>Suhail's Portfolio</title>
				<meta property="og:title" content="Suhail's Portfolio" />
				<meta
					property="og:description"
					content="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<meta
					property="description"
					content="I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<meta
					property="og:image"
					content="/assets/images/social-frame.webp"
				></meta>
				<link
					rel="icon"
					href="/assets/images/SALOGO.webp"
					type="image/x-icon"
				></link>
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
