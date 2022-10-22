import { FruitDot } from './Fruit.styles';

const Fruit = ({ fruitCoords, ...props }) => {
  return (
    <FruitDot
      {...props}
      style={{
        left: `${fruitCoords[0]}%`,
        top: `${fruitCoords[1]}%`,
      }}
    />
  );
};
export default Fruit;
