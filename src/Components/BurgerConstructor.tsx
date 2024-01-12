import React, { useState } from 'react';
import IngredientButton from './AddIngredient';
import meatImage from '../assets/meat.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png'

const Ingredients = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage },
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

  const calculateTotal = () => {
    const ingredientPrice = Object.keys(ingredients).reduce(
      (total, ingredientName) =>
        total + ingredients[ingredientName] * Ingredients.find((i) => i.name === ingredientName)?.price!,
      0
    );
    return basePrice + ingredientPrice;
  };

  const drawIngredients = () => {
    const ingredientElements: JSX.Element[] = [];
    for (const ingredientName in ingredients) {
      for (let i = 0; i < ingredients[ingredientName]; i++) {
        ingredientElements.push(<div key={`${ingredientName}-${i}`} className={ingredientName}></div>);
      }
    }
    return ingredientElements;
  };

  return (
    <>
        <div className="Controls">
            <span className='Title'>Ingredients</span>
            {Ingredients.map((ingredient) => (
                <IngredientButton key={ingredient.name} ingredient={ingredient} onClick={() => addIngredient(ingredient)} />
            ))}
            <button onClick={resetIngredients}>Remove all Ingredients</button>
        </div>
        <div className="Burger">
            <span className='Title'>Burger</span>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {drawIngredients()}
            <div className="BreadBottom"></div>
            <p>Price: {calculateTotal()} </p> 
        </div>
    </>
  );
};

export default BurgerBuilder;