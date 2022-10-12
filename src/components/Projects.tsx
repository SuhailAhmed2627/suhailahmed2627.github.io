import { Center, Box, Stack } from "@mantine/core";
import React from "react";
import Project from "./Project";

const Projects = ({
	title,
	projects,
}: {
	title: string;
	projects: {
		name: string;
		type: string;
		imageSrc: string;
		description: string;
		stack: string[];
		links: {
			name: string;
			url: string;
		}[];
	}[];
}) => {
	return (
		<Center
			id="work"
			className="cursor-default sm:px-[50px] py-[100px] min-h-[70vh] h-max"
		>
			<Box className="w-[90%] lg:w-[1000px] px-[40px] sm:px-[60px] h-full md:px-[150px] lg:px-[30px] xl:px-[50px] flex gap-[5%] flex-col">
				<Center className="mb-[40px] flex w-[100%] font-semibold font-display [font-size:clamp(26px,5vw,32px)] whitespace-nowrap sm:w-max after:block after:ml-[10px] after:md:ml-[10px] after:content[''] after:h-[1px] after:relative after:top-[-2px] text-slate-200 after:bg-slate-600 after:w-[100%] sm:after:w-[200px] md:after:w-[300px]">
					{title}
				</Center>
				<Stack>
					{projects.map((project, index, projects) => (
						<Project
							index={index}
							key={index}
							project={project}
							length={projects.length}
						/>
					))}
				</Stack>
			</Box>
		</Center>
	);
};

export default Projects;
