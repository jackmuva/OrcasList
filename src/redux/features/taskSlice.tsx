import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Schema} from "../../../amplify/data/resource";

export interface TaskState{
    tasks: Array<Schema["Tasks"]["type"]>
}

const initialState: TaskState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask(state, action: PayloadAction<Array<Schema["Tasks"]["type"]>>){
            state.tasks = action.payload;
        }
    }
});

export const {setTask} = taskSlice.actions;
export const selectTask = (state: RootState) => state.tasks;
export default taskSlice.reducer;