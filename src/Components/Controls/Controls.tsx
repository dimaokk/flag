import { FC } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import { CustomSelect } from "./Select";

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

type OptionType = { value: string; label: string };

const options = [
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Africa", label: "Africa" },
  { value: "Oceania", label: "Oceania" },
] as Array<OptionType>;

interface IControlsProp {
  onSearch: (search: string, regionValue: string) => void;
}

export const Controls: FC<IControlsProp> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region;
    onSearch(search, regionValue);
    //eslint-disable-next-line
  }, [search, region]);

  return (
    <SelectWrapper>
      <Search search={search} setSearch={setSearch} />
      <div>Choise region</div>
      <CustomSelect
        options={options}
        placeholder="Filter region"
        isClearable
        isSearchable={false}
        // onChange={setRegion}
      />
    </SelectWrapper>
  );
};
