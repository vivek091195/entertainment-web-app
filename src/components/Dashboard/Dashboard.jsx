import React from "react";
import { Panel } from "../Panel/Panel";
import { DashboardContainer } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Panel />
    </DashboardContainer>
  );
};

export { Dashboard };
