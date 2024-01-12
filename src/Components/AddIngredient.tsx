import React from 'react';

interface IngredientBtnProps {
  ingredient: {
    name: string;
    price: number;
    image: string;
  };
  onClick: () => void;
}

const IngredientBtn: React.FC<IngredientBtnProps> = ({ ingredient, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={ingredient.image} />
      {ingredient.name}
    </button>
  );
};

export default IngredientBtn;