export interface Action {
  (param?: any): (dispatch: any) => any,
}
