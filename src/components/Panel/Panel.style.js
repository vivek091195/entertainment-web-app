import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const PanelContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: ${COLORS.BLUE.shade2};
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const TopSection = styled.div`
  width: 100%;
  height: 10%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleSection = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PanelItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 1rem 0;
  cursor: pointer;
  outline: none;

  > svg > path {
    transition: fill 0.3s ease;
  }

  &:hover > svg > path {
    fill: ${COLORS.WHITE.shade1};
  }

  &:active,
  &:focus > svg > path {
    fill: ${COLORS.RED.shade1};
  }
`;

export const BottomSection = styled(TopSection)``;
