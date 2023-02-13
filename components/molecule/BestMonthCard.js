import Link from "next/link";
import styled from "styled-components";

// 컴포넌트
import CardImg from "@/atoms/CardImg";
import { BlackboldBig, BlackRegularSmall } from "@/common-css/text";

export default function BestMonthCard({ movie }) {
  return (
    <CardWrap href="/">
      <CardImg imgSrc={movie?.posterUrl} imgAlt={movie?.title} />
      <BlackboldBig className="top-12 text-center">{movie?.title}</BlackboldBig>
      <BlackRegularSmall className="top-8 text-center">
        🗓 {movie?.prodYear}년
      </BlackRegularSmall>
      <BlackRegularSmall className="top-2 text-center">
        🎬 {movie?.genre}
      </BlackRegularSmall>
    </CardWrap>
  );
}

const CardWrap = styled(Link)`
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;
