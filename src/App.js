import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar2 from "./components/navbar2.component"
import Navbar from "./components/navbar.component"
import FoodList from "./components/food-list.component";
import EditFood from "./components/edit-food.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar2 />
     <div className="container">
      
        <br/>
        <Route path="/" exact component={FoodList} />
        <Route path="/edit/:id" component={EditFood} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
