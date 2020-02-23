const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
  Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  
  const foodname = req.body.foodname;
  const price = req.body.price;
  const saleprice = req.body.saleprice;

  const newFood = new Food({foodname,price,saleprice});


  newFood.save()
    .then(() => res.json('Caleb you added a Food!'))
    .catch(err => res.status(400).json('FoodError: ' + err));
});

router.route('/:id').get((req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .then(price => res.json(price))
    .then(saleprice => res.json(saleprice))
    .catch(err => res.status(400).json('Error: Caleb' + err));
});

router.route('/:id').delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('food deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Food.findById(req.params.id)
    .then(food => {
      food.foodname = req.body.foodname;
      food.price = req.body.price;
      food.saleprice = req.body.saleprice;

      food.save()
        .then(() => res.json('food updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;