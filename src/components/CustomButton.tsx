import React from "react";
import { Button } from "@mantine/core";

const CustomButton = (props: any) => {
	return (
		<Button
			variant={"outline"}
			classNames={{
				outline:
					"rounded-sm hover:bg-secondary/10 border-secondary text-secondary font-mono font-normal",
			}}
			{...props}
		>
			{props.children}
		</Button>
	);
};

export default CustomButton;
