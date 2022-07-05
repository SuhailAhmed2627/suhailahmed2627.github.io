import { Box, Center, Stack } from "@mantine/core";
import React from "react";
import links from "src/utils/navLinks";
import Button from "./CustomButton";

const Sidebar = ({ sidebarOpened }: { sidebarOpened: boolean }) => {
	return (
		<Box
			className={`fixed bg-tertiary top-0 left-full ${
				sidebarOpened ? "-translate-x-full " : ""
			}w-[75%] h-[100vh]  md:hidden`}
		>
			<Center className="h-full w-full">
				<Stack>
					{links.map((link, index) => (
						<Center className="w-full py-5 hover:text-secondary hover:cursor-pointer">
							<a className="font-mono" href={link.href}>
								{link.name}
							</a>
						</Center>
					))}
					<Center className="w-full py-5 ">
						<Button
							size="lg"
							onClick={() =>
								window.open(
									"/assets/files/suhail-ahmed-resume.pdf",
									"_blank"
								)
							}
						>
							Resume
						</Button>
					</Center>
				</Stack>
			</Center>
		</Box>
	);
};

export default Sidebar;
