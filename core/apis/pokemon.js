import axios from "../../pages/api/axios";
import { useQuery } from "react-query";

const KMDB_API_KEY = "VGIK9V4C0JW0U7CZRYP4";

export const getPokemon = async () => {
  let { data } = await axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/",
  });
  console.log("포켓몬", data);
};

export const getPokemonList = () => {
  const data = useQuery("pokemon", getPokemon);
  return data;
};

export const getMovie = async () => {
  let { data } = await axios({
    method: "get",
    url: `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=${KMDB_API_KEY}`,
    // url: "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2(또는 search_json2).jsp?collection=kmdb_new2",
  });

  console.log("영화", data);

  return data;
};

export const getMovieList = () => {
  const { data } = useQuery(["movie"], () =>
    getMovie().then((res) => console.log(res))
  );

  return data;
};
