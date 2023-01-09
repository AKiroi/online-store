const hash = window.location.hash.slice(1);
const queryParams = hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : '';
export const getQueryParams = new URLSearchParams(queryParams);

export const deleteQuerryParams = () => {
  getQueryParams.delete('category');
  getQueryParams.delete('brand');
  getQueryParams.delete('sort');
  getQueryParams.delete('search');
  getQueryParams.delete('view');
  getQueryParams.delete('priceMax');
  getQueryParams.delete('priceMin');
}