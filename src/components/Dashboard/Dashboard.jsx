import React from "react";
import { Panel } from "../Panel/Panel";
import {
  DashboardContainer,
  ListingSection,
  PanelSection,
} from "./Dashboard.style";
import { SearchPanel } from "../SearchPanel/SearchPanel";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <PanelSection>
        <Panel />
      </PanelSection>
      <ListingSection>
        <SearchPanel />
      </ListingSection>
    </DashboardContainer>
  );
};

export { Dashboard };
