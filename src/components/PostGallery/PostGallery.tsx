import { useState, type SyntheticEvent } from "react";
import {
	Box,
	CircularProgress,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import type { BlogPost } from "../../blog/blogPosts";
import './PostGallery.css';
import { Link } from "react-router-dom";

interface PostGalleryProps {
	blogPosts: BlogPost[]
}

/**
 * Displays a visual collection of blog posts with their previews and
 * thumbnails.
 * 
 * @param {PostGalleryProps} props the component's properties
 * @param {BlogPost[]} props.blogPosts an array of parsed blog post data
 * @returns 
 */
export default function PostGallery(props: PostGalleryProps) {
	const [loading, setLoading] = useState<Record<string, boolean>>(
		() => props.blogPosts.reduce(
			(acc, post) => ({ ...acc, [post.thumbnail]: true }),
			{} as Record<string, boolean>
		)
	);
	const [tab, setTab] = useState('1');

	const handleLoad = (thumbnail: string) => {
		setLoading((prev) => ({ ...prev, [thumbnail]: false }));
	};

	const handleTab = (_event: SyntheticEvent, index: string) => setTab(index);

	return (<TabContext value={tab}>
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<TabList onChange={handleTab}>
				<Tab label="Travel" value="1" />
				<Tab label="Music" value="2" />
			</TabList>
		</Box>
		<TabPanel value="1">
			<ImageList>
				{props.blogPosts.map((post) => (<Link to={`blog/${post.slug}`}>
					<ImageListItem
						key={post.thumbnail}
						className="post-preview"
					>
						{loading[post.thumbnail] && (
							<div style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}} >
								<CircularProgress />
							</div>
						)}

						<img
							src={post.thumbnail}
							alt={post.title}
							loading="lazy"
							onLoad={() => handleLoad(post.thumbnail)}
							style={
								loading[post.thumbnail]
									? { visibility: "hidden" } : {}
							}
						/>

						<ImageListItemBar
							title={post.title}
							subtitle={post.daterange}
						/>
					</ImageListItem>
				</Link>))}
			</ImageList>
		</TabPanel>
		<TabPanel value="2">
			music
		</TabPanel>
	</TabContext>);
}