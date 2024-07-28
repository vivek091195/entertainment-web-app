import React from "react";
import { usePanel } from "./usePanel";
import { ReactComponent as Logo } from "../../assets/Movie.svg";
import { ReactComponent as ProfileIcon } from "../../assets/ProfileIcon.svg";
import {
  BottomSection,
  MiddleSection,
  PanelContainer,
  PanelItem,
  TopSection,
} from "./Panel.style";

const Panel = () => {
  const { panelItems } = usePanel();
  const _renderPanelItem = (item = {}) => <PanelItem>{item.logo}</PanelItem>;

  return (
    <PanelContainer>
      <TopSection>
        <Logo />
      </TopSection>
      <MiddleSection>
        {Object.keys(panelItems).map((itemKey) =>
          _renderPanelItem(panelItems[itemKey])
        )}
      </MiddleSection>
      <BottomSection>
        <ProfileIcon />
      </BottomSection>
    </PanelContainer>
  );
};

export { Panel };
