import styled from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../styles";

export const LoginPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoginModal = styled.div`
  min-height: 40vh;
  width: 80%;
  max-width: 400px;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${COLORS.BLUE.shade2};
`;

export const LoginTitle = styled.h1`
  color: ${COLORS.WHITE.shade1};
  font-size: ${TYPOGRAPHY.heading.l};
  font-weight: normal;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const FormField = styled.input`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 1rem 0.5rem 0.8rem;
  border-bottom: 1px solid ${COLORS.BLUE.shade3};
  font-size: ${TYPOGRAPHY.body.m};
  margin: 0.5rem 0;
  color: ${COLORS.WHITE.shade1};
  transition: border-color 0.3s ease;
  &:focus {
    border-bottom-color: ${COLORS.WHITE.shade1};
  }
`;

export const SubmitButton = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  background: ${COLORS.RED.shade1};
  color: ${COLORS.WHITE.shade1};
  font-size: ${TYPOGRAPHY.body.m};
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${COLORS.WHITE.shade1};
    color: ${COLORS.BLACK.shade1};
  }
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: baseline;
  white-space: nowrap;
`;

export const InfoText = styled.span`
  font-size: ${TYPOGRAPHY.body.m};
  color: ${COLORS.WHITE.shade1};
  margin-right: 0.6rem;
`;

export const LoginButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  color: ${COLORS.RED.shade1};
  font-size: ${TYPOGRAPHY.body.m};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${COLORS.WHITE.shade1};
  }
`;
