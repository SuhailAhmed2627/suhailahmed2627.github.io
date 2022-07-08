import { Center, Box, Tabs } from "@mantine/core";
import React, { useEffect } from "react";
import Work from "./Work";

const Experience = ({
	title,
	experiences,
}: {
	title: string;
	experiences: {
		company: string;
		companyUrl: string;
		role: string;
		startDate: string;
		endDate: string;
		description: string[];
	}[];
}) => {
	const [mobile, setMobile] = React.useState(false);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	});

	return (
		<Center id="experience" className="cursor-default py-[100px] h-[70vh]">
			<Box className=" lg:w-[800px] px-[40px] sm:px-[60px] h-full md:px-[150px] lg:px-[30px] xl:px-[50px] flex gap-[5%] flex-col">
				<Center className="flex w-[100%] h-[15%] font-semibold font-display [font-size:clamp(26px,5vw,32px)] whitespace-nowrap sm:w-max after:block after:ml-[10px] after:md:ml-[10px] after:content[''] after:h-[1px] after:relative after:top-[-2px] text-slate-200 after:bg-slate-600 after:w-[100%] sm:after:w-[200px] md:after:w-[300px]">
					{title}
				</Center>
				<Box className="max-h-[400px] w-full max-w-[600px]">
					<Tabs
						classNames={{
							root: "w-full h-full",
							tabsList: "h-full md:ml-[-2px] md:mr-0",
							tabsListWrapper:
								"md:border-l-2 md:border-r-0 border-slate-700",
							tabControl:
								"font-mono border-r-0 text-slate-400 transition-none",
							tabActive:
								"md:border-l-2 md:border-solid md:border-r-0 transition-none !border-secondary !text-secondary",
							tabLabel: "transition-none",
						}}
						grow
						orientation={`${mobile ? "horizontal" : "vertical"}`}
					>
						{experiences
							.sort((experiencesOne, experienceTwo) => {
								return (
									// @ts-ignore
									new Date(experienceTwo.startDate) -
									// @ts-ignore
									new Date(experiencesOne.startDate)
								);
							})
							.map((experience, index) => (
								<Tabs.Tab key={index} label={experience.company}>
									<Work
										company={experience.company}
										companyUrl={experience.companyUrl}
										role={experience.role}
										startDate={experience.startDate}
										endDate={experience.endDate}
										description={experience.description}
									/>
								</Tabs.Tab>
							))}
					</Tabs>
				</Box>
			</Box>
		</Center>
	);
};

export default Experience;
