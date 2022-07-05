import { Center, Box, Stack, Text, Image } from "@mantine/core";
import React from "react";

const content = [
	`A typical geek who balances between "May the Force be with You" and "May the Mass-times-Acceleration be with you," Love Programming, Solving Puzzles, Maths, Physics, and Movies. In a mathematical sense, Everything Suhail loves, falls in the union of anything that has learning.`,
	`I love Problem-Solving in perhaps the most straightforward way, thanks to my laziness, but on the other hand, if the problem is not solved efficiently, my need for perfection kicks in. I think that defines me more than anything could do.`,
];

const recentTechnologies = [
	"TypeScript",
	"React",
	"GoLang",
	"NodeJS",
	"Fastify",
	"AWS Cloud",
];

const AboutMe = () => {
	return (
		<Center id="about" className="py-[100px] min-h-[100vh] h-max">
			<Box className="w-full lg:w-[1200px] px-[40px] sm:px-[60px] md:px-[150px] lg:px-[30px] xl:px-[50px] flex gap-[5%] flex-col md:flex-row">
				<Stack className="w-full md:w-[55%]">
					<Center className="flex w-[100%] font-semibold font-display [font-size:clamp(26px,5vw,32px)] whitespace-nowrap sm:w-max after:block after:ml-[10px] after:md:ml-[10px] after:content[''] after:h-[1px] after:relative after:top-[-2px] text-slate-200 after:bg-slate-600 after:w-[100%] sm:after:w-[200px] md:after:w-[300px]">
						About Me
					</Center>
					{content.map((text, index) => (
						<Text>{text}</Text>
					))}
					<Text>
						Here are a few technologies I’ve been working with recently:
					</Text>
					<Box className="grid grid-cols-2 gap-[10px]">
						{recentTechnologies.map((text, index) => (
							<Text className=" font-mono">
								<span className="text-secondary mr-2 ">▹</span>
								{text}
							</Text>
						))}
					</Box>
				</Stack>
				<Box className="flex mt-[10%] md:mt-0 flex-row items-center justify-center md:justify-start w-full md:w-[40%]">
					<Box className="rounded-lg z-10 block w-[300px] h-[300px] after:z-[-100] after:rounded-lg after:overflow-hidden after:w-[300px] after:h-[300px] after:top-5 after:left-5 after:-translate-y-[100%] after:relative after:block after:contents[''] after:border-2 after:border-secondary hover:after:-translate-y-[102.5%] hover:after:-translate-x-[2.5%] after:transition-all">
						<Image
							className="rounded-lg overflow-hidden"
							src={"/assets/images/suhail-ahmed-image.jpg"}
						></Image>
					</Box>
				</Box>
			</Box>
		</Center>
	);
};

export default AboutMe;
