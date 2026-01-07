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
	daterange: string
}