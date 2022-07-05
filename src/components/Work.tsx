import { Grid, Text } from "@mantine/core";
import React from "react";

const Work = ({
	company,
	role,
	startDate,
	endDate,
	description,
}: {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string[];
}) => {
	return (
		<>
			<Text className="text-[22px] font-[500] font-display text-slate-300">
				{role} <span className="text-secondary">@ {company}</span>
			</Text>
			<Text className="text-[15px] font-mono text-slate-300">
				{startDate} - {endDate}
			</Text>
			<Grid className="mt-[15px] h-[275px] mb-10 overflow-y-auto text-slate-400">
				{description.map((desc, index) => (
					<>
						<Grid.Col
							className="p-[5px] font-mono text-secondary"
							span={1}
							key={index}
						>
							▹
						</Grid.Col>
						<Grid.Col className="p-[5px]" span={11}>
							{desc}
						</Grid.Col>
					</>
				))}
			</Grid>
		</>
	);
};

export default Work;
