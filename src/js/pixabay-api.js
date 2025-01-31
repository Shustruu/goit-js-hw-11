const API_KEY = '48570036-c1286eb0f250b1a0b1860393a';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPhotosByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
