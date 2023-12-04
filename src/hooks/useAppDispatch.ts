import { useDispatch as useDispatchRedux } from 'react-redux';
import { AppDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatchRedux<AppDispatch>();