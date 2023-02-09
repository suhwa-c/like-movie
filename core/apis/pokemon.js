import axios from "../../pages/api/axios";
import { useQuery } from "react-query";

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
