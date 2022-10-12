import { Stack } from "@mantine/core";
import React from "react";
import Icon from "./Icon";
import { socialsArray } from "src/utils/constants";

const Socials = () => {
	return (
		<Stack className="w-full gap-7 pb-6">
			{socialsArray.map((social, index) => {
				return (
					<a
						href={social.url}
						target="_blank"
						key={index}
						className="inline-block mx-2 cursor-pointer"
					>
						{<Icon name={social.name} />}
					</a>
				);
			})}
		</Stack>
	);
};

export default Socials;
