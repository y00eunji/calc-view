import { Calculator } from 'calc-eunji-utils';
import { Dispatch, SetStateAction } from 'react';
import { HistoryType } from '../../../context/historyContext.tsx';
import { OPERATORS, OperatorsType } from '../../../constant/operators.ts';
import { checkIsMinusString, checkIsNull } from './conditions.ts';

type SetInputType = Dispatch<SetStateAction<string>>;
type SetHistoryType = Dispatch<SetStateAction<HistoryType[]>>;
type Params = {
  setInput: SetInputType;
  setCurrentInput: Dispatch<SetStateAction<string>>;
  setHistory?: SetHistoryType;
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

  clickDeleteBtn: ({setInput,setCurrentInput, inputValue}: Params & { inputValue: string; }): void => {
    handleInputChange(setInput, setCurrentInput, inputValue.replace(/.$/, ''));
  },

  clickOperatorBtn: ({value, inputValue, currentInput, setInput, setCurrentInput}: Params & { value: string; inputValue: string; currentInput: string }): void => {
    if (checkIsNull(inputValue) && checkIsMinusString(value)) {
      handleInputChange(setInput, setCurrentInput, value);
      return;
    }

    if (inputValue === "") {
      handleInputChange(setInput, setCurrentInput, '');
      return;
    }

    if (checkIsMinusString(currentInput) && checkIsMinusString(value)) {
      return;
    }

    if (checkIsMinusString(value) && OPERATORS.includes(currentInput as OperatorsType)) {
      setInput(prev => prev + value);
    } else {
      setInput(prev => OPERATORS.includes(currentInput as OperatorsType) ? prev.replace(/.$/, value) : prev + value);
    }

    setCurrentInput(value);
  },

  clickNumberBtn: ({value, inputValue, setInput, setCurrentInput}: Params & { value: string; inputValue: string }): void => {
    setInput(prev =>
      (inputValue === '-0' || inputValue === '0')? value
        : (checkIsMinusString(inputValue) && value !== '0') ? '-' + value
          : prev + value
    );
    setCurrentInput(value);
  },

  clickResultBtn: ({inputValue, setInput, setCurrentInput, setHistory}: Params & { inputValue: string }): void => {
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
