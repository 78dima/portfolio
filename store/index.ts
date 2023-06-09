import { composeWithDevTools } from '@redux-devtools/extension';
import { createWrapper } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, legacy_createStore as createStore, Store } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { reducer, RootState } from './reducers/index';

// create a makeStore function
const makeStore = () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
