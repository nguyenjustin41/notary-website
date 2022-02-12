import React from 'react';
import { HeroSection, Process, Services, Reviews, Contact } from '../index'

const Home = () => {
  return (
      <div>
          <HeroSection/>
          <Process/>
          <Services/>
          <Reviews />
          <Contact />
      </div>
  );
};

export default Home;
