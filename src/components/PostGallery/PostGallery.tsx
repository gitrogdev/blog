import {
	CircularProgress,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	ListSubheader
} from "@mui/material";
import { useState } from "react";

import type { BlogPost } from "../../blog/blogPosts";
import './PostGallery.css';

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

	const handleLoad = (thumbnail: string) => {
		setLoading((prev) => ({ ...prev, [thumbnail]: false }));
	};

	return (
		<ImageList>
			<ImageListItem key="Subheader" cols={2}>
				<ListSubheader component="div">Blog Posts</ListSubheader>
			</ImageListItem>

			{props.blogPosts.map((post) => (
				<ImageListItem
					key={post.thumbnail}
					className="post-preview"
				>
					{loading[post.thumbnail] && (
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}}
						>
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
			))}
		</ImageList>
	);
}