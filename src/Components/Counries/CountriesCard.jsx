import React from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--background-color);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid white;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;
const CardBody = styled.div`
  padding: 1rem 2rem 1.5rem;
`;
const CardTitle = styled.h3`
  font-size: var(--fs-mid);
  font-weight: var(--fw-bold);
`;
const CardList = styled.ul``;
const CardListItem = styled.li`
  font-size: var(--fs-small) 
  lihe-height: 1.5;
  font-weight: var(--fw-bold)
  
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const CountriesCard = ({ img, name, info = [], onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardImg src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((itm) => (
            <CardListItem key={itm.title}>
              <b>{itm.title}</b>
              {itm.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </CardWrapper>
  );
};
