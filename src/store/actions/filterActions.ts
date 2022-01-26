export enum FilterActions {
  FETCH_FILTER = "FETCH_FILTER",
}
export interface IFilterState {
  value: string;
}
export interface IAction {
  type?: string;
  payload: string;
}
