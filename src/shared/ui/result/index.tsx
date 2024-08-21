import styled from 'styled-components';
import { HistoryType } from '../../../app/context/historyContext.tsx';

interface  ResultProps {
  item: HistoryType;
  handleDeleteButton: (id : number) => void;
}

export default function Result({ item, handleDeleteButton } : ResultProps) {
  return (
    <CustomHistory key={item.id}>
      <CustomText>계산식 : {item.expression}</CustomText>
      <CustomText>결과값 : {item.result}</CustomText>
      <CustomDeleteButton onClick={() => handleDeleteButton(item.id)}>삭제</CustomDeleteButton>
    </CustomHistory>
  );
}


const CustomHistory = styled.div`
    display: flex;
    font-size: 18px;
    gap: 20px;
    justify-content: space-between;
`

const CustomText = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`

const CustomDeleteButton = styled.button`
    width: 60px;
    font-size: 15px;
    padding: 0;
`
