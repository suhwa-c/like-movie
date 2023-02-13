import Link from "next/link";
import styled from "styled-components";

//
import { Container } from "@/common-css/container";

export default function Header() {
  return (
    <HeaderBox>
      <Container>
        <Logo href="/">Like Movie</Logo>
      </Container>
    </HeaderBox>
  );
}
const HeaderBox = styled.header`
  height: 80px;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled(Link)`
  font-size: 28px;
  margin: auto;
  line-height: 80px;
  color: #726556;
  font-weight: bold;
`;
