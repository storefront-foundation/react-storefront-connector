/**
 * Data for the home page
 */
export default interface HomePageData {
  /**
   * The title for the document
   */
  title: string
  /**
   * HTML snippets from the CMS. Keys are slot names, values are HTML strings
   */
  slots: { [name: string]: string }
}
