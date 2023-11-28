import React from 'react'
import Icons from './components/Header/icon';
import Showcase from './components/Showcase/Showcase';
import Cards from './components/Cards/Cards';
// import Companies from './components/Companies/Companies';
import Contact from './components/contact-form/Contact';

function App() {
  return (
    <>
      <Icons></Icons>
      <Showcase></Showcase>
      <Cards></Cards>
      {/* <Companies></Companies> */}
      <Contact></Contact>
    </>
  );
}

export default App;
