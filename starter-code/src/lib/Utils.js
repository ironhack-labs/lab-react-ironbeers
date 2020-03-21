export const formatContributor = (contributor) => {
  return contributor !== undefined ? contributor.substring(0, contributor.indexOf('<') -2) : '';
};

