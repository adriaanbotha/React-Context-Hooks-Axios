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
        console.log('news data received ->', data);
        setVegetable(data);
        console.log("Type of vegetable ", typeof vegetable);
      })
      .catch((error: any) => {
        console.log('error ->', error);
      });
  }, []);   //This line is IMPORTANT since the [] makes sure it is also called only once !!!!

  return (
    <div>
      <h1>React Hooks In Context</h1>
      <h2>Today's Fruit is {fruit}</h2>
      <Vegetable />
      <h3>Vegies and then News Items once the API Call returns</h3>

      {vegetable && Array.from(vegetable).map((veggie) => {
        return (<ul>{JSON.stringify(veggie)}</ul>)
      })}

    </div>
  )
};

export default App;
