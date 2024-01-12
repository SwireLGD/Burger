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
    <button onClick={onClick} className='IngredientBtn'>
      <img src={ingredient.image} className='IngredientImg' />
      {ingredient.name}
    </button>
  );
};

export default IngredientBtn;