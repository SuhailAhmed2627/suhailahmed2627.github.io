import { Box, Stack, Group, Text, Image } from "@mantine/core";
import React from "react";
import Icon from "./Icon";

const Project = ({
	project,
	index,
	length,
}: {
	project: {
		name: string;
		type: string;
		imageSrc: string;
		description: JSX.Element;
		stack: string[];
		links: {
			name: string;
			url: string;
		}[];
	};
	index: number;
	length: number;
}) => {
	const isLeft = index % 2 !== 0;
	return (
		<Box
			key={index}
			className={`[box-shadow:0_10px_30px_-15px_#000000] md:shadow-none rounded-lg md:rounded-none overflow-hidden grid grid-cols-12 ${
				index != length - 1 ? "mb-[40px]" : ""
			}`}
		>
			<Box
				className={`z-10 col-span-full ${
					isLeft
						? "md:col-start-1 md:col-end-7"
						: "md:col-start-7 md:col-end-13"
				} row-span-full bg-transparent md:py-[30px]`}
			>
				<Stack
					spacing={0}
					className={`w-full h-full bg-primary bg-opacity-80 md:bg-transparent p-8 md:p-0 ${
						!isLeft && "md:text-right"
					}`}
				>
					<Text className="text-[12px] font-mono text-secondary my-1">
						{project.type}
					</Text>
					<Text className="font-display font-semibold [font-size:clamp(24px,5vw,28px)] text-slate-200 hover:text-secondary my-1">
						{project.name}
					</Text>
					<Box className="md:[box-shadow:0_10px_30px_-15px_#000000] my-3 md:p-5 md:bg-tertiary md:rounded-md">
						{project.description}
					</Box>
					<Group
						className={`my-1 ${
							!isLeft && "md:justify-end"
						} gap-x-3 gap-y-0`}
					>
						{project.stack.map((stack, index) => (
							<Text
								key={index}
								className="text-slate-300 font-mono text-[12px]"
							>
								{stack}
							</Text>
						))}
					</Group>
					<Group className={`my-3 ${!isLeft && "md:justify-end"}`}>
						{project.links.map((link, index) => (
							<a
								className="h-[25px] w-[25px]"
								href={link.url}
								key={index}
							>
								<Icon key={index} name={link.name} />
							</a>
						))}
					</Group>
				</Stack>
			</Box>
			<Box
				className={`col-span-full ${
					isLeft
						? "md:col-start-6 md:col-end-13"
						: "md:col-start-1 md:col-end-8"
				} row-span-full md:rounded-lg bg-primary md:overflow-hidden`}
			>
				<Image
					classNames={{
						figure: "h-full",
						imageWrapper: "h-full",
						image: "!h-full",
					}}
					className="h-full"
					src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif"
				/>
			</Box>
		</Box>
	);
};

export default Project;
