import React from "react";
import Attribution from "../../components/attribution/Attribution";
import BuildCommunity from "../../components/build/BuildCommunity";
import FlowingConversations from "../../components/flowing-conversations/FlowingConversations";
import Footer from "../../components/footer/Footer";
import GrowTogether from "../../components/grow-together/GrowTogether";
import Hero from "../../components/hero/Hero";
import ScreenMockups from "../../components/screen-mockups/ScreenMockups";
import Stats from "../../components/stats/Stats";
import YourUsers from "../../components/your-users/YourUsers";

function Home(props) {
  return (
    <>
      <Hero />
      <ScreenMockups />
      <Stats />
      <GrowTogether />
      <FlowingConversations />
      <YourUsers />
      <BuildCommunity />
      <Footer />
      <Attribution />
    </>
  );
}

export default Home;
