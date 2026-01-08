import { Outlet } from "react-router-dom";

import { blogPosts } from "../../blog/blogPosts";
import Nav from "../Nav/Nav";
import PostGallery from "../PostGallery/PostGallery";
import Footer from "../Footer/Footer";

export default function Layout() {
	return (<>
		<Nav />
		<main>
			<Outlet/>
		</main>
		<PostGallery blogPosts={blogPosts}/>
		<Footer/>
	</>);
}