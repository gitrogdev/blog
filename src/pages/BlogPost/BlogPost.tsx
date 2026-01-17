import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

import { blogPosts } from "../../blog/blogPosts";
import updateMeta from "../../util/updateMeta";
import './BlogPost.css';

interface BlogPostProps {
	title: string
}

/**
 * Renders and returns the section for an individual blog post on the site from
 * a markdown file specified in the slug.
 * 
 * @param {PostGalleryProps} props the component's properties
 * @param {string} props.title the title of the site
 *
 * @returns the rendered blog post
 */
export default function BlogPost(props: BlogPostProps) {
	const { slug } = useParams();
	const post = blogPosts.find(check => check.slug === slug);

	if (!post) return <Typography variant="h3">Post not found</Typography>;

	useEffect(() => {
		document.title = `${props.title} - ${post.title}`;
	}, [post.title]);

	updateMeta('description', `gitrog in ${post.location.toLocaleLowerCase()}`);

	return (<article>
		<Typography variant="h3">{post.title}</Typography>
		<Typography variant="h5">{post.daterange}</Typography>
		<ReactMarkdown>{post.content}</ReactMarkdown>
		<Button
			variant="contained"
			endIcon={<CameraAlt />}
			component="a"
			href={post.gallery}
			target="_blank"
		>
			View Gallery
		</Button>
	</article>)
}