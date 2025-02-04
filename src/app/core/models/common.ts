export interface tableHeader {
  header : string;
  fieldname : string;
  type : string;
  width? : number;
}

export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
