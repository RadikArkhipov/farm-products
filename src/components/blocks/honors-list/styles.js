import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styled";

export const StyledHonorsList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorWhite};
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const HonorList = styled(Ul)`
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const HonorItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
