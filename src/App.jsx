import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './Aboutsection';
import Courses from './Coursessection';
import Testimonials from './Testimonialsection';
import Contact from './Contactsectoin';
import Footer from './Footer';
const App = () => {
  return (  
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
   );
}
 
export default App;