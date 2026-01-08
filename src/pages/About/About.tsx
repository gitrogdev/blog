import { Box, Typography } from "@mui/material";
import './About.css';
import yearsSince from "../../util/yearsSince";
import Links from "../../components/Links/Links";

export default function About() {
	const age = yearsSince('2002-08-08');
	const timeEU = yearsSince('2021-09-14');
	const timeHR = yearsSince('2022-09-12');

	return (<Box className="about-box">
		<Typography variant="h3" gutterBottom>
			gitblog
		</Typography>
		<Typography>
			Hi, I'm gitrog, a {age}-year-old web developer based in Zagreb,
			Croatia. I'm originally from the Boston area, but have lived in
			Europe for {timeEU} year{timeEU === 1 ? '' : 's'} and Croatia
			for the last {timeHR}. Some of you might know me from my Roblox
			development work from 2017 to 2025, others from my other development
			projects, and some might even know me in the real world!
		</Typography>
		<Typography>
			This website will primarily serve as my personal home page (no, it's
			not written in PHP, thank God). It will serve as a place to share
			photography, music, and other thoughts, as I'm not on any
			traditional social media platforms.
		</Typography>
		<Typography>
			I enjoy traveling, listening to music (lately that's primarily been
			Radiohead and their related projects, Pixies, and Croatian and
			ex-Yugoslav rock), programming, watching films and series, gaming,
			and having an interesting beer every now and then. If you're
			interested in connecting over any of those, I've linked various
			socials for those below.
		</Typography>
		<Box
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				border: '1px solid',
				borderColor: 'divider',
				borderRadius: 2,
				bgcolor: 'background.paper',
				color: 'text.secondary',
				'& svg': {
					m: 1,
				},
			}}
		>
			<Links/>
		</Box>
	</Box>);
}