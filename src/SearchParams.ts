export interface SearchParamsBase {
  /**
   * The page of data to retreive
   */
  page?: number
  /**
   * The codes corresponding to the selected filters
   */
  filters?: string[]
  /**
   * The code corresponding to the selected sort option
   */
  sort?: string
}

export default interface SearchParams extends SearchParamsBase {
  /**
   * The search text entered by the user
   */
  q?: string
}
