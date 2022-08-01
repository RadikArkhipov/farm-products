import styled from "styled-components";
import HonorIcon from "../honor-icon/honor-icon";

export const StyledHonorCard = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => props.theme.colorFarmCard};
  box-sizing: border-box;
`;

export const StyledHonorIcon = styled(HonorIcon)`
  position: absolute;
  top: 0;
  left: 92;
`;

export const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 52px;
  object-fit: contain;
  margin-left: -223px;
`;

export const Text = styled.p`
  margin-bottom: 0;
`;

export const TitleContainer = styled.title`
  margin: 0;
  margin-left: 90px;
  margin-top: -35px;
`;
