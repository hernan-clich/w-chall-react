import React from 'react';

import Header from './Header';
import Hero from './Home/Hero';
import Tech from './Home/Tech';
import Social from './Home/Social';
import Benefits from './Home/Benefits';
import Requirements from './Home/Requirements';
import Footer from './Home/Footer';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Tech/>
      <Social/>
      <Benefits/>
      <Requirements/>
      <Footer/>
    </>
  );
};

export default Home;
