import { Link, Typography } from "@mui/material";

import "./Footer.css";

const originalCopyright = 2026;

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const copyrightRange = originalCopyright === currentYear
		? `${originalCopyright}` : `${originalCopyright}-${currentYear}`;

	return (<footer>
		<Typography variant="body2" color="grey.500">
			&copy; gitrog {copyrightRange}. All rights reserved.
			Powered by <Link href="https://vitejs.dev/" underline="hover">
				Vite
			</Link>,{" "}
			<Link href="https://www.typescriptlang.org/" underline="hover">
				TypeScript
			</Link>, and{" "}
			<Link href="https://react.dev/" underline="hover">
				React.js
			</Link>. Hosted on{" "}
			<Link href="https://pages.github.com/" underline="hover">
				GitHub Pages
			</Link>.
		</Typography>
	</footer>);
}