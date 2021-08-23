const getJokes = (category, query) => {
  const url = new URL("https://api.chucknorris.io/jokes/random");

  if (category) {
    const params = { category };
    url.search = new URLSearchParams(params).toString();
  } else if (query) {
    return fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    ).then((response) => response.json());
  }
  return fetch(url).then((response) => response.json());
};

export default getJokes;

