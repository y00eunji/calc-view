import styled from 'styled-components';

interface ButtonProps{
  value: string;
  onClick: () => void;
  className?: string;
}

export default function Buttons({value, onClick, className}:ButtonProps) {
  return <CustomButton key={value} className={className} onClick={onClick} value={value}>{value}</CustomButton>;
}

const CustomButton = styled.button<ButtonProps>`
    width: 100%;
    height: 100%;
    font-size: 20px;
    text-align: center;
    background-color: gray;
    border: 0;
    box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .288);

    ${({ value }) => {
        switch (value) {
            case 'AC':
                return 'grid-column: 1 / 3; grid-row: 1 / 2; background-color: #125eb8;';
            case 'del':
                return 'grid-column: 3 / 4; grid-row: 1 / 2; background-color: #6482AD;';
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
        }
    }}`