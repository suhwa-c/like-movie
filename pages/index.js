import { getPokemonList, getMovieList } from "core/apis/pokemon";

// 컴포넌트
import Header from "@/organism/Header";
import { Container, Section, FlexContainer } from "@/common-css/container";
import { BlackBoldTitle } from "@/common-css/text";
import BestMonthCard from "@/molecule/BestMonthCard";

export default function Home() {
  // const data = getPokemonList();
  const data = getMovieList();

  const monthMovieData = [
    {
      movieId: 0,
      posterUrl:
        "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202301/19344_103_1.jpg",
      title: "더 퍼스트 슬램덩크",
      rating: "12세관람가",
      prodYear: "2023",
      genre: "애니메이션",
    },
    {
      movieId: 1,
      title: "앤트맨과 와스프: 퀀텀매니아",
      posterUrl:
        "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202302/19562_103_1.jpg",
      rating: "12세관람가",
      prodYear: "2023",
      genre: "액션",
    },
    {
      movieId: 2,
      title: "타이타닉",
      posterUrl:
        "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202302/19518_103_1.jpg",
      rating: "15세관람가",
      prodYear: "2023",
      genre: "드라마, 멜로/로맨스, 액션",
    },
    {
      movieId: 3,
      title: "아바타: 물의 길",
      posterUrl:
        "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_103_1.jpg",
      rating: "12세관람가",
      prodYear: "2022",
      genre: "액션, 어드벤쳐, SF",
    },
    {
      movieId: 4,
      title: "바빌론",
      posterUrl:
        "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202302/19437_103_1.jpg",
      rating: "18세관람가",
      prodYear: "2023",
      genre: "드라마",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Section className="bg-brown">
          <BlackBoldTitle className="text-center">
            MD's Pick 추천 영화 🎬
          </BlackBoldTitle>
          <FlexContainer className="center top-32">
            {monthMovieData.map((movie, index) => {
              return <BestMonthCard key={index} movie={movie} />;
            })}
          </FlexContainer>
        </Section>
      </Container>
    </>
  );
}
