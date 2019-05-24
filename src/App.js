import React, { useContext, useEffect } from 'react';
import {FruitContext, VegetableContext} from './store/Store';
import Vegetable from './store/Vegetable';
import {fetchAllArticles} from "./store/selectors";

const App = () => {
  const [fruit] = useContext(FruitContext);
  const [vegetable, setVegetable] = useContext(VegetableContext);

  useEffect(() => {
    fetchAllArticles()
      .then((data) => {
        console.log('data received ->', data);
        setVegetable(data);
      })
      .catch((error: any) => {
        console.log('error ->', error);
      });
  }, []);

  return (
    <div>
      <h1>React Hooks In Context</h1>
      <h2>Today's Fruit is {fruit}</h2>
      <Vegetable />
      <h3>Vegies and then News once the API Call returns</h3>

      {JSON.stringify(vegetable)}

    </div>
  )
};

export default App;
