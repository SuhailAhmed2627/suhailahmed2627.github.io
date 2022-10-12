import { Box, Center, Group, Stack, Text } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./CustomButton";

const Introduction = ({
	starting,
	nameText,
	preTypewriter,
	typewriter,
	description,
	company,
	companyUrl,
	functionButton,
}: {
	starting: string;
	nameText: string;
	preTypewriter: string;
	typewriter: string[];
	description: string;
	company: string;
	companyUrl: string;
	functionButton: string;
}) => {
	return (
		<Center id="#" className="py-[100px] h-[100vh]">
			<Stack
				spacing={0}
				className="w-full cursor-default lg:w-[1200px] px-[40px] sm:px-[60px] md:px-[150px] lg:px-[30px] xl:px-[50px] "
			>
				<Text className="mb-[20px] cursor-default [font-size:clamp(14px,5vw,16px)] sm:mb-[30px] font-mono text-secondary">
					{starting}
				</Text>
				<Text className="leading-none cursor-default [font-size:clamp(40px,8vw,80px)] m-0 p-0 font-display text-slate-200">
					{nameText}
				</Text>
				<Group className=" gap-[0.5rem] cursor-default md:gap-[1rem] [font-size:clamp(30px,4vw,60px)] font-display text-slate-300">
					<Text className="[font-size:clamp(30px,4vw,60px)] s font-display text-slate-400">
						{preTypewriter}
					</Text>
					<Typewriter
						options={{
							strings: typewriter,
							autoStart: true,
							loop: true,
						}}
					/>
				</Group>
				<Text className="text-[15px] md:text-[20px] max-w-[640px] text-slate-300">
					{description}
					<a
						href={companyUrl}
						className="font-semibold cursor-pointer text-secondary"
					>
						{company}
					</a>
					.
				</Text>
				<Box className="w-max mt-[30px] md:mt-[40px]">
					<Button
						ariaLabel="My Resume"
						onClick={() =>
							window.open(
								"/assets/files/suhail-ahmed-resume.pdf",
								"_blank"
							)
						}
						size="md"
					>
						{functionButton}
					</Button>
				</Box>
			</Stack>
		</Center>
	);
};

export default Introduction;
