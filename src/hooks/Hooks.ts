import { AppDispatch, RootState } from "@/redux/Store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector