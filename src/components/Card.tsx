import React from 'react';
import { Block } from '../redux/store';

interface CardProps {
  block: Block;
}

const Card: React.FC<CardProps> = ({ block:{ incomes, expenses} }) => {
  const totalIncome = incomes.reduce((sum, item) => sum + item, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item, 0);
  const total = totalIncome - totalExpenses;

  const maxLength = Math.max(incomes.length, expenses.length);

  return (
    <div className="card">
        <div className="card-and-total">
            <table>
                <thead>
                <tr>
                    <th scope='col' colSpan={2}>Ingreso</th>
                    <th scope='col' colSpan={2}>Egreso</th>
                </tr>
                <tr>
                    <th scope='col'>Concepto</th>
                    <th scope='col'>Valor</th>
                    <th scope='col'>Concepto</th>
                    <th scope='col'>Valor</th>
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: maxLength }).map((_, index) => (
                    <tr key={index}>
                    <td>{incomes[index] && `concepto ${index + 1}` || ''}</td>
                    <td>{incomes[index] || ''}</td>
                    <td>{expenses[index] && `concepto ${index + 1}` || ''}</td>
                    <td>{expenses[index] || ''}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="total">
                <strong>Total:</strong> {total}
            </div>
        </div>
    </div>
  );
};

export default Card;
