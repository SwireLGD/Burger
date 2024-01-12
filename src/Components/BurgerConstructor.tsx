import React, { useState } from 'react';
import IngredientButton from './AddIngredient';
import meatImage from './assets/meat.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import cheeseImage from './assets/cheese.png';

const INGREDIENTS = [
    { name: 'Meat', price: 80, image: './assets/meat.png' },
    { name: 'Cheese', price: 50, image: './assets/salad.png' },
    { name: 'Lettuce', price: 10, image: './assets/bacon.png' },
    { name: 'Bacon', price: 60, image: './assets/cheese.png' },
];

const basePrice = 30;

const BurgerBuilder: React.FC = () => {
  const [ingredients, setIngredients] = useState<Record<string, number>>({});

  const addIngredient = (ingredient: { name: string; price: number; image: string }) => {
    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient.name]: (prevIngredients[ingredient.name] || 0) + 1,
    }));
  };

  const resetIngredients = () => {
    setIngredients({});
  };

  const calculateTotalPrice = () => {
    const ingredientPrice = Object.keys(ingredients).reduce(
      (total, ingredientName) =>
        total + ingredients[ingredientName] * INGREDIENTS.find((i) => i.name === ingredientName)?.price!,
      0
    );
    return basePrice + ingredientPrice;
  };

  return (
    <>
        <div className="Controls">
            <span className='Title'>Ingredients</span>
            {INGREDIENTS.map((ingredient) => (
            <IngredientButton key={ingredient.name} ingredient={ingredient} onClick={() => addIngredient(ingredient)} />
            ))}
            <button onClick={resetIngredients}>Удалить</button>
                
        </div>
        <div className="Burger">
            <span className='Title'>Burger</span>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <div className="BreadBottom"></div>
            <p>Price: {calculateTotalPrice()} </p> 
        </div>
    </>
  );
};

export default BurgerBuilder;
