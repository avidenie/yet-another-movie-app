export interface PaginatedResource<T> {
  page: string;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MovieResource {
  id: number;
  title: string;
  overview: string;
}
