export const OPERATORS = ['+', '-', '*', '/'] as const;

export type OperatorsType = typeof OPERATORS[number];