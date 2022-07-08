import { Grid, Text, Box } from "@mantine/core";
import React from "react";

const Work = ({
	company,
	companyUrl,
	role,
	startDate,
	endDate,
	description,
}: {
	company: string;
	companyUrl: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string[];
}) => {
	return (
		<>
			<Text className="text-[22px] font-[500] font-display text-slate-300">
				{role}{" "}
				<span className="text-secondary">
					@{" "}
					<a
						className="hover:tracking-wide text-secondary"
						href={companyUrl}
						target="_blank"
					>
						{company}
					</a>
				</span>
			</Text>
			<Text className="text-[15px] font-mono text-slate-300">
				{startDate} - {endDate}
			</Text>
			<Box className="mt-[15px] mb-10 h-[225px]">
				<Grid className="overflow-y-auto text-slate-400">
					{description.map((desc, index) => (
						<>
							<Grid.Col
								className="p-[5px] font-mono text-secondary"
								span={1}
								key={index}
							>
								▹
							</Grid.Col>
							<Grid.Col key={index} className="p-[5px]" span={11}>
								{desc}
							</Grid.Col>
						</>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Work;
