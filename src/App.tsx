import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import BlogPost from "./pages/BlogPost/BlogPost";
import JumpToTop from "./components/JumpToTop/JumpToTop";

const title = 'gitblog';

export default function App() {
	return (<HashRouter>
		<JumpToTop/>
		<Routes>
			<Route element={<Layout/>}>
				<Route path="/" element={<About title={title}/>}/>
				<Route path="blog/:slug" element={<BlogPost title={title}/>}/>
			</Route>
		</Routes>
	</HashRouter>);
};