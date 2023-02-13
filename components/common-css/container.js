import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  margin: auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  &.center {
    margin: auto;
  }

  &.top-32 {
    margin-top: 32px;
  }
`;

export const Section = styled.div`
  border-radius: 16px;
  background-color: #fff;
  margin: 32px 0;
  padding: 32px;

  &.bg-brown {
    background-color: #a19587;
  }
`;
