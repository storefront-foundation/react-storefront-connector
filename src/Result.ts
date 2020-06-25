import AppData from './AppData'

export default interface Result<T> {
  /**
   * App-level data needed during server-side rendering
   */
  appData: AppData
  /**
   * Data used to render the main body of the page. This data is needed
   * during both server-side rendering and client-side navigation between pages.
   */
  pageData: T
}
