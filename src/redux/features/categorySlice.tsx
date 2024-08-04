import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Schema} from "../../../amplify/data/resource";

export interface CategoryState{
    categories: Array<Schema["Categories"]["type"]>
}

const initialState: CategoryState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<Array<Schema["Categories"]["type"]>>){
            state.categories = action.payload;
        }
    }
});

export const {setCategories} = categorySlice.actions;
export const selectCategory = (state: RootState) => state.categories;
export default categorySlice.reducer;