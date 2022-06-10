import { useState, useEffect, FC } from "react";
import styled from "styled-components";
//componennt
import { IoArrowBack } from "react-icons/io5";
import { CountryInfo } from "../Components/CountryInfo/CountryInfo";
//route
import { useNavigate, useParams } from "react-router-dom";
//api
import { countriesAPI } from "../api";

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--color-element);
  border: none;
  font-size: var(--fs-small);
  font-weight: var(--fw-normal);
  color: var(--color-text);
  line-height: 2.5;
  text-align: center;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
`;

type RoutePropType = {
  name: string ;
};

export const CountryDeteils: FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { name } = useParams<RoutePropType>() as RoutePropType;

  const [country, setCountry] = useState<Array<any>>();

  useEffect(() => {
    countriesAPI.getCountries(name).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack size={16} /> Go back
      </Button>
      {country && <CountryInfo {...country} />}
    </div>
  );
};
