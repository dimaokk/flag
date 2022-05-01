import { useState, useEffect } from "react";
import styled from "styled-components";
//componennt
import { IoArrowBack } from "react-icons/io5";
//route
import { useNavigate, useParams } from "react-router-dom";
//api
import { countriesAPI } from "../api";

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--color-elemetnt);
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

export const CountryDeteils = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { name } = useParams();

  const [country, setCountry] = useState();
  useEffect(() => {
    countriesAPI.getCountries(name).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack size={16} /> Go back
      </Button>
      CountryDeteils{""}
      {name}
    </div>
  );
};
