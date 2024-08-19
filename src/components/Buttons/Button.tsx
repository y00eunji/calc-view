import styled from 'styled-components';

interface ButtonProps{
  value: string;
  onClick: () => void;
  className?: string;
}

export default function Button({value, onClick, className}:ButtonProps) {
  return <CustomButton key={value} className={className} onClick={onClick} value={value}>{value}</CustomButton>;
}

const CustomButton = styled.button<ButtonProps>`
    width: 100%;
    height: 100%;
    font-size: 40px;
    text-align: center;
    background-color: gray;
    ${({ value }) => {
      switch (value) {
        case 'AC':
          return 'grid-column: 1 / 4; grid-row: 1 / 2; background-color: #125eb8;';
        case '+':
          return 'grid-column: 4; grid-row: 1; background-color: #7FA1C3';
        case '-':
          return 'grid-column: 4; grid-row: 2; background-color: #7FA1C3';
        case '*':
          return 'grid-column: 4; grid-row: 3; background-color: #7FA1C3';
        case '/':
          return 'grid-column: 4; grid-row: 4; background-color: #7FA1C3';
        case '0':
          return 'grid-column: 1 / 4; grid-row: 5;';
        case '=':
          return 'grid-column: 4; grid-row: 5; background-color: #6482AD;';

        //   // 숫자 버튼의 위치 설정
        //   // const numberIndex = calcText.indexOf(char) - 5;
        //   // const row = Math.floor(numberIndex / 3) + 2;
        //   // const col = (numberIndex % 3) + 1;
        //   // return `grid-column: ${col}; grid-row: ${row};`;
    }
}}`