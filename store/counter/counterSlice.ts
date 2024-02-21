import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit'

// Create our state..........
interface CounterState {
    value: number
}

const initialState: CounterState ={
    value: 0
}


// Create our actual slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>)=>{
            state.value += action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(incrementAsync.pending,()=>{
            console.log('Magical think Happens, incrementAsync.pending.......')
        }).addCase(incrementAsync.fulfilled,(state, action: PayloadAction<number>)=>{
            state.value += action.payload
            console.log('Done.......')
        })
    }
})
export const incrementAsync = createAsyncThunk(
    'counter/increment',
    async (amount: number)=>{
        await new Promise((resolve)=> setTimeout(resolve, 3000))
        return amount
    }
)

export const {increment, decrement, incrementByAmount } =counterSlice.actions;
export default counterSlice.reducer