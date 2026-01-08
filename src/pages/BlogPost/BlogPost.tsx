import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

import { blogPosts } from "../../blog/blogPosts";
import './BlogPost.css';

export default function BlogPost() {
	const { slug } = useParams();
	const post = blogPosts.find(check => check.slug === slug);

	if (!post) return <Typography variant="h3">Post not found</Typography>;
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