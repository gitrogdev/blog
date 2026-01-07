import { blogPosts } from './blog/blogPosts';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import PostGallery from './components/PostGallery/PostGallery';

export default function App() {
	return (<>
		<Nav />
		<About />
		<PostGallery blogPosts={blogPosts}/>
	</>);
};