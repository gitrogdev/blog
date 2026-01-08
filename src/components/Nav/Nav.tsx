import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Links from '../Links/Links';
import "./Nav.css";

export default function Nav() {
	return (
		<AppBar position="static" className="nav-bar">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link to="">gitblog</Link>
				</Typography>
				<Links/>
			</Toolbar>
		</AppBar>
	);
}