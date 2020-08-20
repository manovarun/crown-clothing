import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
