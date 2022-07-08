import { Box, Center, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { Button } from ".";
import Icon from "./Icon";
import { socialsArray } from "src/utils/constants";

const GetInTouch = ({
	preTitle,
	title,
	content,
}: {
	preTitle: string;
	title: string;
	content: string;
}) => {
	return (
		<Stack
			align={"center"}
			id="contact"
			className=" cursor-default py-[100px] h-[80vh]"
		>
			<Center className=" lg:w-[800px] px-[40px] sm:px-[60px] h-full md:px-[150px] lg:px-[30px] xl:px-[50px] flex gap-[5%] flex-col">
				<Text className="font-mono mb-[20px] text-secondary text-[22px]">
					{preTitle}
				</Text>
				<Text className="[font-size:clamp(40px,5vw,60px)] font-display leading-none text-slate-300 font-bold">
					{title}
				</Text>
				<Text
					align="center"
					className="text-[22px] font-display text-slate-400 leading-tight"
				>
					{content}
				</Text>
				<Box className="m-10">
					<Button
						component="a"
						size={"xl"}
						href={"mailto:suhailahmed2001sam@gmail.com"}
					>
						Say Hello
					</Button>
				</Box>
			</Center>
			<Group
				position="center"
				align={"center"}
				className="md:hidden w-full gap-7 pb-6"
			>
				{socialsArray.map((social, index) => {
					return (
						<a
							onClick={() => window.open(social.url, "_blank")}
							key={index}
							className="inline-block mx-2 cursor-pointer h-[30px] w-[30px]"
						>
							{<Icon name={social.name} />}
						</a>
					);
				})}
			</Group>
		</Stack>
	);
};

export default GetInTouch;
