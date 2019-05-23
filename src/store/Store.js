import React, { useState } from 'react';

export const FruitContext = React.createContext([]);
export const VegetableContext = React.createContext([]);

const Store = ({children}) => {
  const [fruit, setFruit] = useState('Tomato');
  const [vegetable, setVegetable] = useState('Bananna');

  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegetableContext.Provider value={[vegetable, setVegetable]}>
        {children}
      </VegetableContext.Provider>
    </FruitContext.Provider>
  );
};

export default Store;
