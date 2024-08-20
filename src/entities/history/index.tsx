import styled from 'styled-components';
import { useContext } from 'react';
import Result from '../../components/result';
import { HistoryContext, HistoryType } from '../../context/historyContext.tsx';

export default function History() {
  const context = useContext(HistoryContext);

  if (!context) throw new Error('HistoryContext null 입니다.');

  const { history, setHistory } = context;

  const handleDeleteButton = (id:number) => {
    setHistory((prev: HistoryType[]) => {
      return  prev.filter((item) => item.id !== id)
    });
  }

  return (
    <Container>
      {[...history].reverse().map(item => (
        <Result item={item} handleDeleteButton={handleDeleteButton} />
      ))}
    </Container>
  );
}

const Container = styled.div`
    width: 50%;
    border-left: 1px solid white;
    padding: 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
`;


