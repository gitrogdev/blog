import { AppBar, Toolbar, Typography } from '@mui/material';
import Links from '../Links/Links';

export default function Nav() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					blogrog
				</Typography>
				<Links/>
			</Toolbar>
		</AppBar>
	);
}