import { Stack } from "@mantine/core";
import { Introduction, AboutMe, Experience, Projects } from "src/components";

const Home = () => {
	return (
		<Stack className="w-full">
			<Introduction />
			<AboutMe />
			<Experience />
			<Projects />
		</Stack>
	);
};

export default Home;
