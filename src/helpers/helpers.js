export const parseQueryParams = (queryString) => {
  return queryString
    .replace('?', '')
    .split('&')
    .reduce((acum, element) => {
      const [key, value] = element.split('=');
      return { ...acum, [key]: value };
    });
};
