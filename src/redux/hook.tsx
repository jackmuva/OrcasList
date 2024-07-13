// Use throughout your app instead of plain `useDispatch` and `useSelector`
import {AppDispatch, RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()