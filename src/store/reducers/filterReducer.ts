import { FilterActions, IAction, IFilterState } from "../actions/filterActions";

const InitialState: IFilterState = {
  value: "",
};

export const FilterReducer = (
  state: IFilterState = InitialState,
  action: IAction
): IFilterState => {
  switch (action.type) {
    case FilterActions.FETCH_FILTER:
      return { value: action.payload };
    default:
      return state;
  }
};
