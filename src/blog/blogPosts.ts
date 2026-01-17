const postFiles: Record<string, string> = import.meta.glob('./posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

/**
 * Represents a blog post for the site.
 */
export interface BlogPost {
	/** The date the post was made on, in YYYY-MM-DD format. */
	date: string,

	/** The location of the post. */
	location: string,

	/** The image URL to the thumbnail of the post. */
	thumbnail: string,

	/** The title of the post. */
	title: string,

	/** The human-readable date or date range of the post. */
	daterange: string,

	/** The URL slug for the post. */
	slug: string,

	/** The URL to the image gallery for the post. */
	gallery: string,

	/** The content of the blog post, as markdown. */
	content?: string
}

function parsePost(contents: string, filename: string): BlogPost {
	const lines = contents.split('\n');
	return {
		date: lines[0].trim(),
		location: lines[1].trim(),
		thumbnail: lines[2].trim(),
		title: lines[3].trim(),
		daterange: lines[4].trim(),
		gallery: lines[5].trim(),
		slug: filename.split('/').pop()!.replace('.md', ''),
		content: lines.slice(6).join('\n').trim()
	}
}

export const blogPosts: BlogPost[] = Object.entries(postFiles).map(
	([filename, contents]) => parsePost(contents, filename)
).sort((a, b) => b.date.localeCompare(a.date));