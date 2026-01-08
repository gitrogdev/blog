import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import BlogPost from "./pages/BlogPost/BlogPost";

export default function App() {
	return (<HashRouter>
		<Routes>
			<Route element={<Layout/>}>
				<Route path="/" element={<About/>}/>
				<Route path="blog/:slug" element={<BlogPost/>}/>
			</Route>
		</Routes>
	</HashRouter>);
};