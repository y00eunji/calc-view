import Button from './Button.tsx';
import { useState } from 'react';
import { Calculator } from 'calc-eunji-utils';
import styled from 'styled-components';

const calcText = ['AC', '+', '-', '*', '/', '0', '7', '8', '9', '4', '5', '6', '1', '2', '3', '='];
const operator = ['+', '-', '*', '/'];

interface ButtonsProps {
  setInput: (value: (((prevState: string) => string) | string)) => void,
  inputValue: string;
}

export default function Buttons({ setInput, inputValue }: ButtonsProps) {
  const [currentInput, setCurrentInput] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'AC') {
      clickDeleteBtn();
    } else if (value === '=') {
      clickResultBtn();
    } else if (operator.includes(value)) {
      clickOperatorBtn(value);
    } else{
      clickNumberBtn(value);
    }
  };

  const clickDeleteBtn = () => {
    setInput('');
    setCurrentInput('');
  };

  const clickOperatorBtn = (value: string) => {
    if(inputValue === "") {
      setInput('');
      setCurrentInput('');
      return;
    }
    if (value === '-' && operator.includes(currentInput)) { // 1*-2 했을때 아무연산자 + '- 연산자' 붙었을 때 가능하게
      setInput(prev => prev + value);
    } else {
      setInput(prev => operator.includes(currentInput) ? prev?.replace(/.$/, value) : prev + value);
    }
    setCurrentInput(value);
  }


  const clickNumberBtn = (value: string) => {
    setInput(prev => (inputValue === '-0' || inputValue === '0') ? value : prev + value);
    setCurrentInput(value);
  }

  const clickResultBtn = () => {
    const result  = String(Calculator(inputValue));
    setInput(result);
    setCurrentInput(result);
  }

  return <CalcButtons>
    {calcText.map((char) => (
        <Button value={char} onClick={() => handleButtonClick(char)} />
    ))}
  </CalcButtons>
}


const CalcButtons = styled.div`
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 5px;
`

