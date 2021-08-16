export interface IQueryInfo {
  offset?: number;
  size?: number;
}

export interface IPageListDataParam {
  pageUrl: string;
  queryInfo: IQueryInfo | any;
}
