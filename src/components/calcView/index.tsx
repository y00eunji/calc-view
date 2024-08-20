import styled from 'styled-components';

interface ResultViewProps {
  inputValue?: string | undefined;
}

export default function CalcView({ inputValue }: ResultViewProps) {
  return <Result><span>{inputValue}</span></Result>;
}

const Result = styled.div`
    background-color: #d2d2d2;
    border-radius: 10px;
    display: flex;
    width: 400px;
    height: 100px;
    align-items: flex-end;
    font-size: 40px;
    word-break: break-all;
    overflow: hidden;
    overflow-wrap: break-word;
    text-align: right;
    flex-direction: column-reverse;
    color: black;
`
