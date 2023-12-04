import { TypedUseSelectorHook, useSelector as useSelectorRedux } from 'react-redux';
import { RootState } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;