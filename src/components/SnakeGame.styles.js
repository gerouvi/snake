import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Result = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 15px;
`;

export const FieldBorders = styled.div`
  position: relative;
  box-sizing: content-box;
  width: 340px;
  height: 340px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  margin-bottom: 20px;
`;

export const GameOver = styled.div`
  position: absolute;
  color: black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: red;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  font-weight: bold;
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & p {
    text-align: center;
  }

  & div {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
  }

  & div:first-of-type {
    margin-bottom: 10px;
  }
`;

export const WrapperLegend = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  & p {
    margin: 0;
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const DotAnswer = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: ${({ color }) => (color === 'blue' ? 'blue' : 'green')};
  border: 1px solid white;
`;

export const WrapperArrows = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  margin-left: auto;
  margin-right: auto;
  display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
`;

export const ArrowUp = styled.div`
  position: absolute;
  border-bottom: 50px solid black;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: none;
  left: 50%;
  transform: translateX(-50%);
`;
export const ArrowDown = styled.div`
  position: absolute;
  border-bottom: none;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 50px solid black;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;
export const ArrowLeft = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: none;
  border-right: 50px solid black;
  border-top: 30px solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;
export const ArrowRight = styled.div`
  position: absolute;
  border-bottom: 30px solid transparent;
  border-left: 50px solid black;
  border-right: none;
  border-top: 30px solid transparent;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
