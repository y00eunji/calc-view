import styled from 'styled-components';

interface ResultViewProps {
  inputValue?: string | undefined;
}

export default function ResultView({ inputValue }: ResultViewProps) {
  return <Result><span>{inputValue}</span></Result>;
}

const Result = styled.div`
    display: flex;
    width: 500px;
    height: 150px;
    align-items: flex-end;
    font-size: 50px;
    word-break: break-all;
    overflow: hidden;
    overflow-wrap: break-word;
    text-align: right;
    flex-direction: column-reverse;
`
