import { Calculator } from 'calc-eunji-utils';
import { Dispatch, SetStateAction } from 'react';
import { HistoryType } from '../../../app/context/historyContext.tsx';
import { OPERATORS, OperatorsType } from '../../../shared/constant/operators.ts';
import { checkIsMinusString, checkIsNull } from './conditions.ts';

type SetInputType = Dispatch<SetStateAction<string>>;
type SetHistoryType = Dispatch<SetStateAction<HistoryType[]>>;
type Params = {
  setInput: SetInputType;
  setCurrentInput: Dispatch<SetStateAction<string>>;
  setHistory?: SetHistoryType;
  value?: string;
  inputValue?: string;
  currentInput?: string;
};

const handleInputChange = (
  setInput: SetInputType,
  setCurrentInput: Dispatch<SetStateAction<string>>,
  newValue: string
) => {
  setInput(newValue);
  setCurrentInput(newValue);
};

export const actions = {
  clickResetBtn: ({setInput,setCurrentInput}: Params): void => {
    handleInputChange(setInput, setCurrentInput, '');
  },

  clickDeleteBtn: ({setInput,setCurrentInput, inputValue}: Params & Required<Pick<Params, 'inputValue'>>): void => {
    handleInputChange(setInput, setCurrentInput, /[가-힣]/.test(inputValue)? '' : inputValue.replace(/.$/, ''));
  },

  clickOperatorBtn: ({value, inputValue, currentInput, setInput, setCurrentInput}: Params & Required<Pick<Params, 'inputValue' | 'currentInput' | 'value'>>): void => {
    if (checkIsNull(inputValue) && checkIsMinusString(value)) {
      handleInputChange(setInput, setCurrentInput, value);
      return;
    }

    if (checkIsNull(inputValue)) {
      handleInputChange(setInput, setCurrentInput, '');
      return;
    }

    if (checkIsMinusString(currentInput) && checkIsMinusString(value)) {
      return;
    }

    if (checkIsMinusString(value) && OPERATORS.includes(currentInput as OperatorsType)) {
      setInput(prev => prev + value);
    } else {
      if(OPERATORS.includes(inputValue[inputValue.length -2] as OperatorsType) && checkIsMinusString(currentInput) &&  OPERATORS.includes(value as OperatorsType)){
        return;
      }else{
        setInput(prev => OPERATORS.includes(currentInput as OperatorsType) ? prev.replace(/.$/, value) : prev + value);
      }
    }

    setCurrentInput(value);
  },

  clickNumberBtn: ({value, inputValue, setInput, setCurrentInput}: Params & Required<Pick<Params, 'inputValue' | 'value'>>): void => {
    setInput(prev =>
      (inputValue === '-0' || inputValue === '0')? value
        : (checkIsMinusString(inputValue) && value !== '0') ? '-' + value
          : prev + value
    );
    setCurrentInput(value);
  },

  clickResultBtn: ({inputValue, setInput, setCurrentInput, setHistory}: Params & Required<Pick<Params, 'inputValue'>>): void => {
    if (checkIsNull(inputValue)) return;

    try {
      const result = String(Calculator(inputValue));
      if (setHistory) {
        setHistory(prev => [
          ...prev,
          {
            id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 0,
            expression: inputValue,
            result: result,
          },
        ]);
      }
      handleInputChange(setInput, setCurrentInput, result);
    } catch (e) {
      handleInputChange(setInput, setCurrentInput, (e as Error).message);
    }
  }
};
