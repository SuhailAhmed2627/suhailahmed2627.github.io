import { Stack } from "@mantine/core";
import {
	Introduction,
	AboutMe,
	Experience,
	Projects,
	OtherProjects,
	GetInTouch,
} from "src/components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

interface IndexProps {
	introductionJson: {
		starting: string;
		nameText: string;
		preTypewriter: string;
		typewriter: string[];
		description: string;
		company: string;
		companyUrl: string;
		functionButton: string;
	};
	aboutMeJson: {
		title: string;
		content: string[];
		recentTechnologies: string[];
	};
	experienceJson: {
		title: string;
		experiences: {
			company: string;
			companyUrl: string;
			role: string;
			startDate: string;
			endDate: string;
			description: string[];
		}[];
	};
	projectsJson: {
		title: string;
		projects: {
			name: string;
			type: string;
			imageSrc: string;
			description: string;
			stack: string[];
			links: {
				name: string;
				url: string;
			}[];
		}[];
	};
	otherProjectsJson: {
		title: string;
		viewArchiveText: string;
		otherProjects: {
			title: string;
			description: string;
			stack: string[];
			links: {
				name: string;
				url: string;
			}[];
		}[];
	};
	getInTouchJson: {
		preTitle: string;
		title: string;
		content: string;
	};
}
const Home = ({
	introductionJson,
	aboutMeJson,
	experienceJson,
	projectsJson,
	otherProjectsJson,
	getInTouchJson,
}: IndexProps) => {
	return (
		<Stack className="w-full">
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeIn"
			>
				<Introduction {...introductionJson} />
			</AnimationOnScroll>
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeInUp"
			>
				<AboutMe {...aboutMeJson} />
			</AnimationOnScroll>
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeInUp"
			>
				<Experience {...experienceJson} />
			</AnimationOnScroll>
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeInUp"
			>
				<Projects {...projectsJson} />
			</AnimationOnScroll>
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeInUp"
			>
				<OtherProjects {...otherProjectsJson} />
			</AnimationOnScroll>
			<AnimationOnScroll
				animateOnce
				duration={0.5}
				animateIn="animate__fadeInUp"
			>
				<GetInTouch {...getInTouchJson} />
			</AnimationOnScroll>
		</Stack>
	);
};

export async function getStaticProps() {
	const json = await import("../../data/data.json");
	return {
		props: {
			introductionJson: json.introduction,
			aboutMeJson: json.aboutMe,
			experienceJson: json.experience,
			projectsJson: json.projects,
			otherProjectsJson: json.otherProjects,
			getInTouchJson: json.getInTouch,
		},
	};
}

export default Home;
