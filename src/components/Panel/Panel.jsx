import React from "react";
import { ReactComponent as Logo } from "../../assets/Movie.svg";
import { ReactComponent as ProfileIcon } from "../../assets/ProfileIcon.svg";
import {
  BottomSection,
  MiddleSection,
  PanelContainer,
  TopSection,
} from "./Panel.style";

const Panel = () => {
  return (
    <PanelContainer>
      <TopSection>
        <Logo />
      </TopSection>
      <MiddleSection></MiddleSection>
      <BottomSection>
        <ProfileIcon />
      </BottomSection>
    </PanelContainer>
  );
};

export { Panel };
