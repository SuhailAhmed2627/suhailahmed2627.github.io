import { Stack } from "@mantine/core";
import React from "react";
import Socials from "./Socials";

const SideElements = () => {
	return (
		<>
			<Stack
				className="hidden md:flex w-[40px] bottom-0 fixed right-auto left-[40px] after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-400"
				aria-orientation="vertical"
			>
				<Socials />
			</Stack>
			<Stack
				className="hidden md:flex w-[40px] bottom-0 fixed left-auto right-[40px] after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-400"
				aria-orientation="vertical"
			>
				<a
					href="mailto:suhailahmed2001sam@gmail.com"
					className="hover:-translate-y-1 [writing-mode:vertical-lr] my-[20px] mx-auto text-center text-slate-400 text-[0.9rem] font-mono font-normal hover:text-secondary"
				>
					suhailahmed2001sam@gmail.com
				</a>
			</Stack>
		</>
	);
};

export default SideElements;
