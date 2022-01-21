import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "73f2e5764amsh7a768831bd54276p1f1c73jsn1d95d2bbba26",
    },
  });

  return data;
};
