/**
 * Calculates the number of years since a given date.
 * 
 * @param {string} since the date to calculate the number of years from in
 * YYYY-MM-DD format
 * 
 * @returns {number} the number of years since the date
 */
export default function yearsSince(since: string): number {
	const today = new Date();
	const birthDate = new Date(since);
	const monthDiff = today.getMonth() - birthDate.getMonth();
	return today.getFullYear() - birthDate.getFullYear() - (
		monthDiff < 0 ? 1
		: (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? 1 : 0
	);
}