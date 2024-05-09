import React from 'react';
import WhoAreWe from '../components/WhoWeAre';
import Qualities from "../components/Qualities";
import Team from  "../components/Team";
import Footer from '../components/Footer';

const TeamPage = () => {
  return (
    <div>
      <Team/>
      <WhoAreWe/>
      <Qualities/>
      <Footer/>
    </div>
  )
}

export default TeamPage
