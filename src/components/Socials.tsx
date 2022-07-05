import { Stack } from "@mantine/core";
import React from "react";
import Icon from "./Icon";

const socials = [
	{
		name: "Github",
		url: "https://github.com/SuhailAhmed2627",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/suhail-ahmed-575004143/",
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/unfilthy_muggle/",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/unfilthy_muggle",
	},
];

const Socials = () => {
	return (
		<Stack className="w-full gap-7 pb-6">
			{socials.map((social, index) => {
				return (
					<a
						onClick={() => window.open(social.url, "_blank")}
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
