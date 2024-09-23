
import './App.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, removeBlock, RootState } from './redux/store';
import Card from './components/Card';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks);

  return (
    <div className="app">
      <h1 className="title">Prueba técnica</h1>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <Card key={`${index}${block.incomes.length}`} block={block} />
        ))}
      </div>
      <div className="controls">
        <button className="less" onClick={() => dispatch(removeBlock())}>-</button>
        <button className="more" onClick={() => dispatch(addBlock())}>+</button>
      </div>
    </div>
  );
};

export default App;
