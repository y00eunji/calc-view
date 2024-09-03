import styled from 'styled-components';
import { useContext } from 'react';
import Result from '../../shared/ui/result';
import { HistoryContext, HistoryType } from '../../app/context/historyContext.tsx';

export default function History() {
  const context = useContext(HistoryContext);

  if (!context) throw new Error('HistoryContext null 입니다.');

  const { history, setHistory } = context;

  const handleDeleteButton = (id: number) => {
    setHistory((prev: HistoryType[]) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleHistoryRestButton = () => {
    setHistory([]);
  };

  return (
    <Wrapper>
      <Container>
        {[...history].reverse().map((item) => (
          <Result key={item.id} item={item} handleDeleteButton={handleDeleteButton} />
        ))}
      </Container>
      <ResetButtonWrapper>
        <ResetButton onClick={handleHistoryRestButton}>{history.length ?? 0}개 기록 초기화</ResetButton>
      </ResetButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResetButtonWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const ResetButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: darkred;
`;

const Container = styled.div`
  width: 500px;
  height: 100%;
  border-left: 1px solid white;
  padding: 20px 0 20px 20px;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  overflow: auto;
  max-height: 580px;
`;
