import styled from 'styled-components';
import HistoryContextProvider from './context/historyContext.tsx';
import HistorySection from '../widgets/history';
import CalcSection from '../widgets/calculator';

function App() {
  return (
    <HistoryContextProvider>
      <Wrapper>
        <CalcSection />
        <HistorySection />
      </Wrapper>
    </HistoryContextProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;
