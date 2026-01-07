import About from './components/About/About';
import Nav from './components/Nav/Nav';
import PostGallery from './components/PostGallery/PostGallery';

export default function App() {
	return (<>
		<Nav />
		<About />
		<PostGallery blogPosts={[{
			date: '2025-08-19',
			thumbnail: 'https://photos.smugmug.com/photos/i-wxQjFJ9/0/LzqJZpzkwtGr93DBm88CXLqV5nBC4q227WfrBP696/X3/i-wxQjFJ9-X3.jpg',
			title: 'A Quick Trip to Beograd',
			daterange: 'August 19th, 2025 - August 21st, 2025'
		},
		{
			date: '2025-08-19',
			thumbnail: 'https://photos.smugmug.com/photos/i-wxQjFJ9/0/LzqJZpzkwtGr93DBm88CXLqV5nBC4q227WfrBP696/X3/i-wxQjFJ9-X3.jpg',
			title: 'A Quick Trip to Beograd',
			daterange: 'August 19th, 2025 - August 21st, 2025'
		},
		{
			date: '2025-08-19',
			thumbnail: 'https://photos.smugmug.com/photos/i-wxQjFJ9/0/LzqJZpzkwtGr93DBm88CXLqV5nBC4q227WfrBP696/X3/i-wxQjFJ9-X3.jpg',
			title: 'A Quick Trip to Beograd',
			daterange: 'August 19th, 2025 - August 21st, 2025'
		}]}/>
	</>);
};