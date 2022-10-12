import { Box, Center, Grid, Group, Text, Stack } from "@mantine/core";
import React, { useState } from "react";
import { Button } from ".";
import Icon from "./Icon";

const OtherProjects = ({
	title,
	viewArchiveText,
	otherProjects,
}: {
	title: string;
	viewArchiveText: string;
	otherProjects: {
		title: string;
		description: string;
		stack: string[];
		links: {
			name: string;
			url: string;
		}[];
	}[];
}) => {
	const [showMore, setShowMore] = useState(false);

	return (
		<Center
			id="about"
			className="cursor-default sm:px-[50px] py-[100px] min-h-[70vh] h-max"
		>
			<Box className="w-[100%] lg:w-[1200px] px-[40px] sm:px-[60px] h-full md:px-[150px] lg:px-[30px] xl:px-[50px] flex gap-[5%] flex-col items-center">
				<Text
					align={"center"}
					className="mb-[10px] font-semibold font-display [font-size:clamp(26px,5vw,32px)] whitespace-nowrap sm:w-max text-slate-200 "
				>
					{title}
				</Text>
				{otherProjects.length > 12 && (
					<Text className="font-mono text-secondary font-[14px] cursor-pointer hover:font-semibold">
						{viewArchiveText}
					</Text>
				)}
				<Grid className="m-0 mt-4 w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1200px]">
					{otherProjects
						.slice(0, showMore ? 12 : 6)
						.map((project, index) => (
							<Grid.Col
								key={index}
								className="max-w-[400px] h-[300px]"
								sm={6}
								md={4}
							>
								<Stack
									m={0}
									spacing={0}
									justify={"space-between"}
									className=" group hover:-translate-y-2 w-full h-full rounded-md p-5 [box-shadow:0_10px_30px_-15px_#000000] bg-tertiary"
								>
									<Group position={"apart"} className=" md:h-[30%]">
										<Box className="h-[35px] w-[35px] my-3">
											<Icon name="Folder" />
										</Box>
										<Group position={"left"}>
											{project.links.map((link, index) => (
												<a
													key={index}
													target="_blank"
													rel="noreferrer"
													href={link.url}
													className="h-[20px] w-[20px] my-3"
												>
													<Icon name={link.name} />
												</a>
											))}
										</Group>
									</Group>
									<Stack
										spacing={0}
										m={0}
										className="flex-grow md:h-[60%]"
									>
										<Text lineClamp={2} className="my-1">
											<a
												href={project.links[0].url}
												className="font-display cursor-pointer leading-none font-semibold text-[22px] text-slate-300 group-hover:text-secondary"
											>
												{project.title}
											</a>
										</Text>
										<Text className="font-display text-[17px] leading-none text-slate-400">
											{project.description}
										</Text>
									</Stack>

									<Group className={`my-1 gap-x-3 gap-y-0`}>
										{project.stack.map((stack, index) => (
											<Text
												key={index}
												className="text-slate-300 font-mono text-[12px]"
											>
												{stack}
											</Text>
										))}
									</Group>
								</Stack>
							</Grid.Col>
						))}
				</Grid>
				{otherProjects.length > 6 && (
					<Box className="m-10">
						<Button
							ariaLabel={showMore ? "Show Less" : "Show More"}
							size={"lg"}
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? "Show Less" : "Show More"}
						</Button>
					</Box>
				)}
			</Box>
		</Center>
	);
};

export default OtherProjects;
