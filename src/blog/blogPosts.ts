const postFiles = import.meta.glob('./posts/*.md', { eager: true, as: 'raw' });

/**
 * Represents a blog post for the site.
 */
export interface BlogPost {
	/** The date the post was made on, in YYYY-MM-DD format. */
	date: string,

	/** The image URL to the thumbnail of the post. */
	thumbnail: string,

	/** The title of the post. */
	title: string,

	/** The human-readable date or date range of the post. */
	daterange: string,

	/** The content of the blog post, as markdown. */
	content?: string
}

function parsePost(contents: string): BlogPost {
	const lines = contents.split('\n');
	return {
		date: lines[0].trim(),
		thumbnail: lines[1].trim(),
		title: lines[2].trim(),
		daterange: lines[3].trim(),
		content: lines.slice(4).join('\n').trim()
	}
}

export const blogPosts: BlogPost[] = Object.values(postFiles).map(
	(contents) => parsePost(contents)
).sort((a, b) => b.date.localeCompare(a.date));