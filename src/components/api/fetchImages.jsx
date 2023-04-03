const URL = 'https://pixabay.com/api/';
const KEY = '33714495-b4117455252b81bf3116166cc';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

async function fetchImages(query, page = 1) {
  const response = await fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`);
  return await response.json();
}

export {fetchImages};