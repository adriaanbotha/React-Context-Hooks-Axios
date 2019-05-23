import React, { useContext } from 'react';
import { VegetableContext } from './Store';
import { fetchAllArticles } from './selectors';

const Vegetable = () => {
  const [, setVegetable] = useContext(VegetableContext);

  return (
    <>
      <button onClick={() => setVegetable('Brocoli')}>Set Vege to Broc</button>
    </>
  )
};

export default Vegetable;
