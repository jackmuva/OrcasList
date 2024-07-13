import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './features/taskSlice';
import taskLogReducer from './features/taskLogSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        taskLogs: taskLogReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

