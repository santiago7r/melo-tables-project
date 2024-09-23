import { configureStore, createSlice } from '@reduxjs/toolkit';


export interface Block {
  incomes: number[];
  expenses: number[];
};

const generateRandomList = () : number[] => {
    const length = Math.floor(Math.random() * 10) + 1;
    return Array.from({ length }, () => Math.floor(Math.random() * 10001));
};

const generateBlock = (): Block => ({
  incomes: generateRandomList(),
  expenses: generateRandomList(),
});

const initialBlock: Block = generateBlock();

const blocksSlice = createSlice({
  name: 'blocks',
  initialState: [initialBlock] as Block[],
  reducers: {
    addBlock: (state) => {
      state.push(generateBlock());
    },
    removeBlock: (state) => {
      state.pop();
    },
  },
});


console.log('BLOCKS wt:', blocksSlice.getInitialState)

export const { addBlock, removeBlock } = blocksSlice.actions;

const store = configureStore({
  reducer: {
    blocks: blocksSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
