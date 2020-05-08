export function deleteContributorTags(contributor) {
	return contributor.indexOf('<') > -1 ? contributor.substring(0, contributor.indexOf('<') - 1) : contributor;
}
