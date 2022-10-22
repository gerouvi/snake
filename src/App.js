import { useState } from 'react';
import { Wrapper } from './App.styles';
import { ButtonStyled } from './components/Button.style';
import SnakeGame from './components/SnakeGame';

function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      <Wrapper>
        <h1>Snake</h1>

        {!showGame && (
          <>
            <ButtonStyled onClick={() => setShowGame(true)}>Play</ButtonStyled>
            <ButtonStyled bg="black" color="white">
              <a
                href="https://github.com/gerouvi/snake"
                target="_blank"
                rel="noreferrer"
              >
                Github Code
              </a>
            </ButtonStyled>
          </>
        )}
      </Wrapper>
      {showGame && <SnakeGame setShowGame={setShowGame} />}
    </>
  );
}

export default App;
