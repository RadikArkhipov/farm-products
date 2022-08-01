import React from "react";
import About from "/src/components/blocks/about/about";
import HonorsList from "/src/components/blocks/honors-list/honors-list";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ honors }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <HonorsList honors={honors} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
