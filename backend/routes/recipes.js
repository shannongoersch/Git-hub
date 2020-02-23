const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  
  const recipename = req.body.recipename;
  const ingredient = req.body.ingredient;
  const ingredient2 = req.body.ingredient2;

  const newrecipe = new recipe({recipename,ingredient,ingredient2});


  newrecipe.save()
    .then(() => res.json('Caleb you added a recipe!'))
    .catch(err => res.status(400).json('recipeError: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipename => res.json(recipename))
    .then(ingredient => res.json(ingredient))
    .then(ingredient2 => res.json(ingredient2))
    .catch(err => res.status(400).json('Error: Caleb' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('recipe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.recipename = req.body.recipename;
      recipe.price = req.body.price;
      recipe.saleprice = req.body.saleprice;

      recipe.save()
        .then(() => res.json('recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;