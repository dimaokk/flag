import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      color: "var(--color-text)",
      borderRadius: "var(--radius)",
      padding: "0.25rem",
      boxShadow: "var(--shadow)",
      border: "none",
      height: "50px",
      backgroundColor: "var(--background-color)",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.isSelected
        ? "var(--background-color)"
        : "var(--color-elemetnt)",
    }),
  },
})`
  width: 200px;
  border: none;
  border-radius: var(--radius);

  & > * {
    box-shadow: var(--shadow);
  }

  & > div[id] {
    background-color: var(--background-color);
  }

  & * {
    color: var(--color-text) !important;
  }
`;
