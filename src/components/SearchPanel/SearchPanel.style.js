import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { TYPOGRAPHY } from "../../styles/typography";

export const SearchPanelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 100%;
  position: relative;
  margin-left: 2rem;
`;

export const SearchText = styled.input`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
  font-size: ${TYPOGRAPHY.heading.s};
  color: ${COLORS.WHITE.shade1};
  background-color: transparent;
  caret-color: ${COLORS.RED.shade1};
`;

export const SearchBarUnderline = styled.div`
  position: absolute;
  bottom: -1rem;
  width: 100%;
  height: 1px;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.isFocused ? COLORS.BLUE.shade3 : "transparent"};
`;
