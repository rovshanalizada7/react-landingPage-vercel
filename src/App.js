import {useState} from 'react';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import './App.css';
import { IconCircleCheck,IconBasket } from '@tabler/icons-react';
import {Badge , Container,Drawer,Indicator ,SimpleGrid,List,Group,ThemeIcon,rem,Input,Button } from '@mantine/core';
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
 
  return (
    <div className='App'>
     <Home />
     <About />
     <Work />
     <Testimonial />
     <Footer />
    </div>
  
  
  );
}

export default App;
