import { IconButton } from '@mui/material';
import {
	GitHub,
	Movie,
	MusicNote,
	SportsBar,
	YouTube
} from '@mui/icons-material';

import {
	github,
	letterboxd,
	spotify,
	untappd,
	youtube
} from '../../data/socials.json';

export default function Links() {
	return (<>
		<IconButton
			component="a"
			href={github}
			target="_blank"
			size="large"
			color="inherit"
			aria-label="github"
		>
			<GitHub />
		</IconButton>
		<IconButton
			component="a"
			href={youtube}
			target="_blank"
			size="large"
			color="inherit"
			aria-label="youtube"
		>
			<YouTube />
		</IconButton>
		<IconButton
			component="a"
			href={spotify}
			target="_blank"
			size="large"
			color="inherit"
			aria-label="spotify"
		>
			<MusicNote />
		</IconButton>
		<IconButton
			component="a"
			href={letterboxd}
			target="_blank"
			size="large"
			color="inherit"
			aria-label="letterboxd"
		>
			<Movie />
		</IconButton>
		<IconButton
			component="a"
			href={untappd}
			target="_blank"
			size="large"
			color="inherit"
			aria-label="untappd"
		>
			<SportsBar />
		</IconButton>
	</>);
}