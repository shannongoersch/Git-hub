
import React, { Component } from 'react';
import axios from 'axios';

export default class Editfood extends Component {
  constructor(props) {
    super(props);

    this.onChangefoodname = this.onChangefoodname.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangesaleprice = this.onChangesaleprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      foodname: '',
      price: '',
      saleprice: ''
    }
  }

  componentDidMount() 
  {
    axios.get('http://localhost:5000/foods/'+this.props.match.params.id).then(response => {
        this.setState({
          foodname: response.data.foodname,
          price: response.data.price,
          saleprice: response.data.saleprice     //LOOK AT edit-exercice this is where they connected two databases
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log(this.props.match.params.id);
  }

  onChangefoodname(e) {
    this.setState({
      foodname: e.target.value
    })
  }

  onChangeprice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangesaleprice(e) {
    this.setState({
      saleprice: e.target.value
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const food = {
      foodname: this.state.foodname,
      price: this.state.price,
      saleprice: this.state.saleprice,
    }

    console.log(food);

    axios.post('http://localhost:5000/foods/update/' + this.props.match.params.id, food)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit food Log</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Item Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.foodname}
              onChange={this.onChangefoodname}
              />
        </div>

        <div className="form-group"> 
          <label>price: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
              />
        </div>

        <div className="form-group">
          <label>Sale price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.saleprice}
              onChange={this.onChangesaleprice}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit food Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}