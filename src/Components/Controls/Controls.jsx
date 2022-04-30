import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { CustomSelect } from "./Select";

const options = [
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Africa", label: "Africa" },
  { value: "Oceania", label: "Oceania" },
];

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-direction: center;
    justify-content: space-between;
  }
`;

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    //eslint-disable-next-line
  }, [search, region]);
  return (
    <SelectWrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter region"
        isClearable
        isSearchable={false}
        onChange={setRegion}
      />
    </SelectWrapper>
  );
};
