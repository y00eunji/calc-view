import styled from 'styled-components';
import { HistoryType } from '../../../app/context/historyContext.tsx';

interface  ResultProps {
  item: HistoryType;
  handleDeleteButton: (id : number) => void;
}

export default function Result({ item, handleDeleteButton } : ResultProps) {
  return (
    <CustomHistory key={item.id}>
      <CustomText>✅ 계산식 <div>{item.expression}</div></CustomText>
      <CustomText>🔎 결과값 <div>{item.result}</div></CustomText>
      <CustomDeleteButton onClick={() => handleDeleteButton(item.id)}>삭제</CustomDeleteButton>
    </CustomHistory>
  );
}


const CustomHistory = styled.div`
    display: flex;
    font-size: 18px;
    gap: 20px;
    justify-content: space-between;
    background-color: #808080;
    padding: 4px;
    border-radius: 10px;
`

const CustomText = styled.div`
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
`

const CustomDeleteButton = styled.button`
    width: 60px;
    height: 60px;
    font-size: 15px;
    padding: 0;
`
