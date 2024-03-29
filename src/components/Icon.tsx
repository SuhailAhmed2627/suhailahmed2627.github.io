import React from "react";

const Icon = ({ name }: { name: string }) => {
	switch (name) {
		case "Github":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-github hover:-translate-y-1 group"
				>
					<title>GitHub</title>
					<path
						className="group-hover:text-secondary"
						d=" M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path>
				</svg>
			);
		case "LinkedIn":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-linkedin hover:-translate-y-1 group"
				>
					<title>LinkedIn</title>
					<path
						className="group-hover:text-secondary"
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					></path>
					<rect
						className="group-hover:text-secondary"
						x="2"
						y="9"
						width="4"
						height="12"
					></rect>
					<circle
						className="group-hover:text-secondary"
						cx="4"
						cy="4"
						r="2"
					></circle>
				</svg>
			);
		case "Twitter":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-twitter hover:-translate-y-1 group"
				>
					<title>Twitter</title>
					<path
						className="group-hover:text-secondary"
						d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
					></path>
				</svg>
			);
		case "Instagram":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-instagram hover:-translate-y-1 group"
				>
					<title>Instagram</title>
					<rect
						className="group-hover:text-secondary"
						x="2"
						y="2"
						width="20"
						height="20"
						rx="5"
						ry="5"
					></rect>
					<path
						className="group-hover:text-secondary"
						d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
					></path>
					<line
						className="group-hover:text-secondary"
						x1="17.5"
						y1="6.5"
						x2="17.51"
						y2="6.5"
					></line>
				</svg>
			);
		case "External":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-external-link hover:-translate-y-1 group"
				>
					<title>External Link</title>
					<path
						className="group-hover:text-secondary"
						d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
					></path>
					<polyline
						className="group-hover:text-secondary"
						points="15 3 21 3 21 9"
					></polyline>
					<line
						className="group-hover:text-secondary"
						x1="10"
						y1="14"
						x2="21"
						y2="3"
					></line>
				</svg>
			);
		case "Folder":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-folder"
				>
					<title>Folder</title>
					<path
						className="text-secondary"
						d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
					></path>
				</svg>
			);
		default:
			return null;
	}
};

export default Icon;
