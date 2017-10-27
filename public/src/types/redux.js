// @flow
import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';

// Actions
type OnMessageAction = {|
  type: 'ON_MESSAGE',
  message: string
|};

export type Action =
  | OnMessageAction;

export type PromiseAction = Promise<Action>;

// State
export type State = {
  message: string,
};
export type GetState = () => State;

// Store
export type Store = ReduxStore<State, Action>;

// export type Dispatch = (action: Action | PromiseAction | Array<Action>) => any;
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;
export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>
export type ThunkAction = (dispatch: Dispatch) => any
