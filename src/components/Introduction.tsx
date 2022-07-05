import { Box, Center, Group, Stack, Text } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./CustomButton";

const Introduction = () => {
	return (
		<Center className="py-[100px] h-[100vh]">
			<Stack
				spacing={0}
				className="w-full lg:w-[1200px] px-[40px] sm:px-[60px] md:px-[150px] lg:px-[30px] xl:px-[50px] "
			>
				<Text className="mb-[20px] [font-size:clamp(14px,5vw,16px)] sm:mb-[30px] font-mono text-secondary">
					Hi, my name is
				</Text>
				<Text className="leading-none [font-size:clamp(40px,8vw,80px)] m-0 p-0 font-display text-slate-200">
					Suhail Ahmed.
				</Text>
				<Group className=" gap-[0.5rem] md:gap-[1rem] [font-size:clamp(30px,4vw,60px)] font-display text-slate-300">
					<Text className="[font-size:clamp(30px,4vw,60px)] s font-display text-slate-400">
						I'm a
					</Text>
					<Typewriter
						options={{
							strings: [
								"Full Stack Developer",
								"Student at NITT",
								"Tech Enthusiast",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</Group>
				<Text className="text-[15px] md:text-[20px] max-w-[640px] text-slate-300">
					I’m a software engineer specializing in building (and
					occasionally designing) exceptional digital experiences.
					Currently, I'm building Maintainable, Scalable and Reliable
					applications at{" "}
					<a className="font-semibold text-secondary">Delta Force, NITT</a>
					.
				</Text>
				<Box className="w-max mt-[30px] md:mt-[40px]">
					<Button size="md">Checkout my Resume</Button>
				</Box>
			</Stack>
		</Center>
	);
};

export default Introduction;
