/*import logo from './logo.svg';

import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <><Navbar></Navbar><Main></Main><Footer></Footer></> 
  );
}

export default App;

import { useState } from "react";
import Cart from "./CoffeeShop/Cart";
import Menu from "./CoffeeShop/Menu";
import Navbar from "./CoffeeShop/Navbar";
import categories from "./CoffeeShop/Products";
function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };
  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };
 return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}
export default App;


import InlineStyle from './Day2/InlineStyle';
function App() {
  return (
    <div>
      <InlineStyle/> 
    </div>
  );
}

export default App;

import Menu from "./Components/Menu";
    function App() {
      return (
       <div>
        <Menu />
        
        </div>
        );
      }
      
      export default App;

import React from 'react';
import GokuTransformation from "./Day3/GokuTransformation";
function App() {
  return (
    <div>
      <GokuTransformation />
    </div>
  );
}
export default App;

import React from 'react';
import ToggleMessage from "./Day3/ToggleMessage";
function App() {
  return (
    <div>
      <h1>Toggle Message Example</h1>
      <ToggleMessage />
    </div>
  );
}
export default App;

import HelloWorld from "./Day2/HelloWorld";
function App(){
  return(
    <div>
      <HelloWorld/>

    </div>
  );
}
export default App;


import Counter from "./Day3/Counter";
function App() {
  return (
    <div className="flex space-x-4 my-4">
       <Counter />
    </div>
  );

};
export default App;

import React from 'react';
import FruitSurvey from "./Day4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;*/

import React from 'react';
import MaterialButton from './Day4/MaterialButton';
function App() {
  return (
    <div>
      <h1>React Mateirial-UI Login Example</h1>
      <MaterialButton />
    </div>
  );
}
export default App;