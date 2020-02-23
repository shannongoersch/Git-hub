import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Food = props => (
  <tr>
    <td>{props.food.foodname}</td>
    <td>{props.food.price}</td>
    <td>{props.food.saleprice}</td>
    <td>
      <Link to={"/edit/"+props.food._id}>edit</Link> | <button onClick={() => { props.deleteFood(props.food._id) }}>delete</button>
    </td>
  </tr>
)

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.deleteFood = this.deleteFood.bind(this)

    this.state = {foods: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/foods')
      .then(response => {
        this.setState({ foods: response.data })
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFood(id) {
    axios.delete('http://localhost:5000/foods/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      foods: this.state.foods.filter(el => el._id !== id)
    })
  }

  foodList() {
    return this.state.foods.map(currentfood => {
      return <Food food={currentfood} deleteFood={this.deleteFood} key={currentfood._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Food Inventory</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Sale Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.foodList() }
          </tbody>
        </table>
      </div>
    )
  }
}