import { Link, Typography } from "@mui/material";

import "./Footer.css";

const originalCopyright = 2026;

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const copyrightRange = originalCopyright === currentYear
		? `${originalCopyright}` : `${originalCopyright}-${currentYear}`;

	return (<footer>
		<Typography variant="body2" color="grey.500">
			&copy; gitrog {copyrightRange}. All rights reserved. Powered by
			{" "}<Link href="https://vitejs.dev/"
				target="_blank"
				underline="hover"
			>
				Vite
			</Link>,{" "}
			<Link href="https://www.typescriptlang.org/"
				target="_blank"
				underline="hover"
			>
				TypeScript
			</Link>,{" "}
			<Link href="https://react.dev/" target="_blank" underline="hover">
				React.js
			</Link>, and {" "}
			<Link href="https://mui.com/material-ui/"
				target="_blank"
				underline="hover"
			>
				Material UI
			</Link>. Hosted on{" "}
			<Link href="https://pages.github.com/"
				target="_blank"
				underline="hover"
			>
				GitHub Pages
			</Link>. Source code available on{" "}
			<Link href="https://github.com/gitrogdev/blog/tree/main"
				target="_blank"
				underline="hover"
			>
				GitHub
			</Link>.
		</Typography>
	</footer>);
}