import styled from "styled-components";

const InfoWrapper = styled.section``;
const InfoTitle = styled.h1``;
const CounryImg = styled.img``;
export const CountryInfo = ({title}) => {
  return (
    <InfoWrapper>
      <CounryImg />
      <div>
        <InfoTitle>
          {title}
        </InfoTitle>
      </div>
    </InfoWrapper>
  );
};
