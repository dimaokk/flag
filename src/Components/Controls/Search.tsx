import React, { FC, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-element);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  width: 100%;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({ type: "search",placeholder: "Search country",})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--color-element);
`;

interface ISearchProp {
  search: string;
  setSearch: (event: string) => void;
}

const Search: FC<ISearchProp> = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
