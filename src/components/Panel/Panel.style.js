import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const PanelContainer = styled.div`
  width: 6rem;
  height: 100%;
  border-radius: 1rem;
  background-color: ${COLORS.BLUE.shade2};
  display: flex;
  flex-direction: column;
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
`;

export const BottomSection = styled(TopSection)``;
