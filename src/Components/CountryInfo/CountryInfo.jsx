import { useState, useEffect } from "react";
import styled from "styled-components";
//api
import { countriesAPI } from "../../api";
import { useNavigate } from "react-router-dom";

const InfoWrapper = styled.section`
  display: grid;
  margin-top: 3rem;
  width: 100%;

  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;
const InfoTitle = styled.h1`
  font-weight: var(--fw-normal);
`;
const CounryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoListGroup = styled.div`
  display: flex;
  flex-directiom: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-directiom: row;
    gap: 4rem;
  } ;
`;
const InfoList = styled.ul``;
const InfoListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const MetaData = styled.div`
  dispaly: flex;
  nargin-top: 3rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;
const TagGroup = styled.div`
  dispaly: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--color-element);
  line-height: 1.5;
  cursor: pointer;

  border-radius: var(--radius);
`;
export const CountryInfo = (props) => {
  const {
    name,
    nativeName,
    capital,
    flag,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    // eslint-disable-next-line
    push,
  } = props;

  const navigate = useNavigate();
  const goCountry = (name) => navigate(`/country/${name}`);

  const [bordersCountry, setBordersCountry] = useState([]);
  useEffect(() => {
    countriesAPI
      .filterByCode(borders)
      .then(({ data }) => setBordersCountry(data.map((c) => c.name)));
  }, [borders]);

  return (
    <InfoWrapper>
      <CounryImg src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <InfoListGroup>
          <InfoList>
            <InfoListItem>
              <b>Native name</b>:{nativeName}
            </InfoListItem>
            <InfoListItem>
              <b>Population</b>:{population}
            </InfoListItem>
            <InfoListItem>
              <b>Region</b>:{region}
            </InfoListItem>
            <InfoListItem>
              <b>Sub Region</b>:{subregion}
            </InfoListItem>
            <InfoListItem>
              <b>Capital</b>:{capital}
            </InfoListItem>
          </InfoList>

          <InfoList>
            <InfoListItem>
              <b>Top Level Domain</b> :{" "}
              {topLevelDomain.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </InfoListItem>
            <InfoListItem>
              <b>Currency</b>:
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </InfoListItem>
            <InfoListItem>
              <b>Lang</b>:
              {languages.map((l) => (
                <span key={l.name}>{l.name} </span>
              ))}
            </InfoListItem>
          </InfoList>
        </InfoListGroup>
        <MetaData>
          <b>Border Coutries</b>
          {!borders.length ? (
            <span> Not borders</span>
          ) : (
            <TagGroup>
              {bordersCountry.map((b) => (
                <Tag key={b} onClick={() => goCountry(b)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </MetaData>
      </div>
    </InfoWrapper>
  );
};
