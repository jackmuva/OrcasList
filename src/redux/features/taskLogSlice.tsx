import {Schema} from "../../../amplify/data/resource";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


export interface TaskLogState{
    taskLogs: Array<Schema["TaskLogs"]["type"]>
}

const initialState: TaskLogState = {
    taskLogs: []
}

export const taskLogSlice = createSlice({
    name: 'taskLogs',
    initialState,
    reducers: {
        setTaskLogs(state, action: PayloadAction<Array<Schema["TaskLogs"]["type"]>>){
            state.taskLogs = action.payload;
        }
    }
});

export const {setTaskLogs} = taskLogSlice.actions;
export const selectTaskLog = (state: RootState) => state.taskLogs;
export default taskLogSlice.reducer;

