import styled from "styled-components";

export const StyledHonorIcon = styled.span`
  display: block;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.$bgColor};
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 92px;
`;
