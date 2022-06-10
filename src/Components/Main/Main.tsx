import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../Styled-Components/Container";

const MainWrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface IMainProp {
  children: ReactNode;
}

export const Main: FC<IMainProp> = ({ children }) => {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
};
