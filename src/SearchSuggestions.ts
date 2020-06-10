import Link from './Link'

export default interface SearchSuggestions {
  /**
   * The original search string
   */
  text: string
  /**
   * Groups of suggestions to display
   */
  groups: SuggestionGroups[]
}

export interface SuggestionGroups {
  /**
   * The caption to display above the group
   */
  caption: string
  /**
   * The type of UI to use
   */
  ui: 'list' | 'thumbnails'
  /**
   * The links to display
   */
  links: Link[]
}
