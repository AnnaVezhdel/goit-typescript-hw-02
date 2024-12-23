import axios from "axios";

export const fetchImages = async (page = 1, query: string) => {
  return await axios
    .get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "41cosF564XUZ5gR0hUuTx32XpetmnkYga7XyLCIyg2U",
        query: query,
        page: page,
        per_page: 12,
      },
    })
    .then((response) => response.data);
};
