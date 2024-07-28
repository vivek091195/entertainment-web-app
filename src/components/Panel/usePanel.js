import { useState } from "react";
import { PANEL_ITEMS } from "../../constants/PanelItems";

const usePanel = () => {
  const [panelItems, setPanelItems] = useState(PANEL_ITEMS);

  return {
    panelItems,
  };
};

export { usePanel };
