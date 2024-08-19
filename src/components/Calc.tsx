import { useState } from 'react';
import ResultView from './ResultView.tsx';
import Buttons from './Buttons/Buttons.tsx';
import styled from 'styled-components';

export default function Calc() {
  const [input, setInput] = useState('');

  return (
    <Container>
      <ResultView inputValue={input} />
      <Buttons inputValue={input} setInput={setInput} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
