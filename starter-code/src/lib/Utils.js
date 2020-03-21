export const formatContributor = (contributor) => {
  console.log("Contribuyente " + contributor);
  return contributor !== undefined 
  ? (contributor.indexOf('<') === -1) 
  ? contributor 
  : contributor.substring(0, contributor.indexOf('<') -2) 
  : '';
};

