import SearchResult from './SearchResult'
import MenuItem from './MenuItem'

/**
 * The data for the PLP
 */
export default interface SubcategoryPageData extends SearchResult {
  /**
   * The subcategory ID
   */
  id: string
  /**
   * The name of the subcategory
   */
  name: string
  /**
   * The title for the document
   */
  title: string
  /**
   * A list of menu items for navigation from landing pages
   */
  navMenu?: MenuItem[]
}
