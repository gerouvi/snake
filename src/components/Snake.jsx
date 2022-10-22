import { SnakeDot } from './Snake.styles';

const Snake = ({ snakeCoords }) => {
  return snakeCoords.map((dot, index) => {
    return (
      <SnakeDot key={index} style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }} />
    );
  });
};

export default Snake;
