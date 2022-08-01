import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 652px;
  background-color: ${(props) => props.theme.colorForBlueBackground};
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    top: 56px;
    bottom: -24px;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 627px;
    margin: auto;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 538px;
  z-index: 3;
  box-sizing: border-box;
`;

export const Text = styled(Paragraph)`
  margin-top: 24px;
`;
