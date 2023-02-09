import { getPokemonList } from "core/apis/pokemon";

export default function Home() {
  const data = getPokemonList();

  return (
    <div>
      <p>포켓몬</p>
    </div>
  );
}
