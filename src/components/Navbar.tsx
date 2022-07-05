import { Box, Center, Group, Image, Burger } from "@mantine/core";
import Button from "./CustomButton";
import React, { useEffect, useState } from "react";
import links from "src/utils/navLinks";

const handleScroll = (
	currentScrollY: number,
	prevScrollY: number,
	setScrollY: React.Dispatch<React.SetStateAction<number>>,
	setScrollDirection: React.Dispatch<React.SetStateAction<string>>
) => {
	const scrollDirection = currentScrollY > prevScrollY ? "down" : "up";
	setScrollY(currentScrollY);
	setScrollDirection(scrollDirection);
};

const Navbar = ({
	sidebarOpened,
	setSidebarOpened,
}: {
	sidebarOpened: boolean;
	setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [scrollY, setScrollY] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("down");

	useEffect(() => {
		const handler = () => {
			handleScroll(window.scrollY, scrollY, setScrollY, setScrollDirection);
		};

		window.addEventListener("scroll", handler);

		return () => {
			window.removeEventListener("scroll", handler);
		};
	}, [scrollY, scrollDirection]);

	return (
		<Box
			className={`fixed top-0 z-20 h-[100px] ${
				scrollY != 0
					? scrollDirection == "up"
						? "shadow-lg backdrop-blur-lg"
						: "-translate-y-full"
					: ""
			} w-[100%] bg-transparent flex flex-row justify-between px-[25px] md:px-[40px]`}
		>
			<Center className="h-100">
				<Image height={60} src={"/assets/images/SALOGO.png"}></Image>
			</Center>
			<Box className="hidden md:flex">
				<Group className="h-[100px] gap-5" grow>
					{links.map((link, index) => (
						<Center className="px-5 py-5 hover:text-secondary hover:cursor-pointer">
							<a className="font-mono" href={link.href}>
								{link.name}
							</a>
						</Center>
					))}
					<Center className="px-5 py-5 ">
						<Button
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
				</Group>
			</Box>
			<Center className="relative z-50 md:hidden">
				<Burger
					opened={sidebarOpened}
					onClick={() => setSidebarOpened((prev) => !prev)}
					size={40}
					classNames={{
						burger: "bg-slate-400 after:bg-slate-400 before:bg-slate-400",
					}}
				/>
			</Center>
		</Box>
	);
};

export default Navbar;
