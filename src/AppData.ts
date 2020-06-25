import MenuItem from './MenuItem'

/**
 * App-level data needed during server-side rendering to populate the main menu and navigation tabs
 */
export default interface AppData {
  /**
   * Data for the main menu
   */
  menu: MenuItem
  /**
   * Data for the navigation tabs.
   */
  tabs: MenuItem[]
}
