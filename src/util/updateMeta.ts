/**
 * Updates the data in a meta tag, or creates one if it does not exist.
 * 
 * @param {string} tag the meta tag to target
 * @param {string} content the content to assign to the meta tag
 */
export default function updateMeta(tag: string, content: string) {
	let meta = document.querySelector(`meta[name="${tag}"]`);

	if (!meta) {
		meta = document.createElement('meta');
		meta.setAttribute('name', tag);
		document.head.appendChild(meta);
	}

	meta.setAttribute('content', content);
}