import { useState, useEffect } from "react";
import styled from "styled-components";
//componennt
import { Container } from "../Styled-Components/Container";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
//route
import { Link } from "react-router-dom";

const HeaderElment = styled.header`
  background-color: var(--color-element);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: var(--color-text);
  font-size: var(--fs-small);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitchElement = styled.div`
  color: var(--color-text);
  font-size: var(--fs-small);
  cursor: pointer;
`;

export const Header = () => {
  const [themeMode, setThemeMode] = useState("light_mode");

  const togleTheme = () =>
    setThemeMode(themeMode === "light_mode" ? "dark_mode" : "light_mode");

  useEffect(() => {
    document.body.setAttribute("app-theme", themeMode);
  }, [themeMode]);

  return (
    <HeaderElment>
      <Container>
        <HeaderWrapper>
          <Title>Where is the world</Title>
          <ThemeSwitchElement onClick={togleTheme}>
            {themeMode === "light_mode" ? (
              <BsMoonStars size={14} />
            ) : (
              <BsMoonStarsFill size={14} />
            )}
          </ThemeSwitchElement>
        </HeaderWrapper>
      </Container>
    </HeaderElment>
  );
};
