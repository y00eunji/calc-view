import Button from '../../shared/ui/button';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { HistoryContext } from '../../app/context/historyContext.tsx';
import { actions } from './utils/actions.ts';
import {OPERATORS, OperatorsType} from '../../shared/constant/operators.ts';

const CALC_TEXT = ['AC', 'del', '+', '-', '*', '/', '0', '7', '8', '9', '4', '5', '6', '1', '2', '3', '='];

interface ButtonsProps {
  setInput: (value: (((prevState: string) => string) | string)) => void,
  inputValue: string;
}

export default function Buttons({ setInput, inputValue }: ButtonsProps) {
  const [currentInput, setCurrentInput] = useState('');
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("HistoryContext null 입니다.");
  }
  const { setHistory } = context;

  const handleButtonClick = (value: string) => {
    if(/[가-힣]/.test(inputValue)) setInput('')

   if (value === 'AC') {
      actions.clickResetBtn({ setInput, setCurrentInput });
    }else if (value === 'del') {
      actions.clickDeleteBtn({ setInput, setCurrentInput , inputValue});
    }else if (value === '=') {
      actions.clickResultBtn({ inputValue, setInput, setCurrentInput, setHistory });
    } else if (OPERATORS.includes(value as OperatorsType)) {
      actions.clickOperatorBtn({ value, inputValue, currentInput, setInput, setCurrentInput });
    } else {
      actions.clickNumberBtn({ value, inputValue, setInput, setCurrentInput });
    }
  };

  return <CalcButtons>
    {CALC_TEXT.map((char) => (
      <Button key={char} value={char} onClick={() => handleButtonClick(char)} />
    ))}
  </CalcButtons>
}

const CalcButtons = styled.div`
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 4%;
`;
