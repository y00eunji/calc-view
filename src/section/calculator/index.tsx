import { useState } from 'react';
import styled from 'styled-components';
import CalcView from '../../shared/ui/calcView';
import Buttons from '../../features/calculator';

export default function CalcSection() {
  const [input, setInput] = useState('');

  return (
    <Container>
      <CustomCalcBack>
        <CalcView inputValue={input} />
        <Buttons inputValue={input} setInput={setInput} />
      </CustomCalcBack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const CustomCalcBack = styled.div`
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #1a1a1a;
`;
