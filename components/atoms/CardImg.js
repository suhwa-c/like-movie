import styled from "styled-components";

export default function CardImg({ imgSrc, imgAlt }) {
  return (
    <CardImgBox>
      <img src={imgSrc} alt={imgAlt} />
    </CardImgBox>
  );
}
const CardImgBox = styled.div`
  border-radius: 10px;
  width: 205px;
  height: 290px;
  overflow: hidden;
  position: relative;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
`;
