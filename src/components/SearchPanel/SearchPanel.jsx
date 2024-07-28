import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";
import {
  SearchBar,
  SearchText,
  SearchPanelContainer,
  SearchBarUnderline,
} from "./SearchPanel.style";

const SearchPanel = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <SearchPanelContainer>
      <SearchIcon />
      <SearchBar>
        <SearchText
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for movies or TV series"
        />
        <SearchBarUnderline isFocused={isFocused} />
      </SearchBar>
    </SearchPanelContainer>
  );
};

export { SearchPanel };
