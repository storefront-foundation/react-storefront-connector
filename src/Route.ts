/**
 * Maps a URL pattern to a next.js route supported by the React Storefront starter app.
 */
export default interface Route {
  /**
   * An express-style route pattern. For example:
   *
   * ```
   * /products/:productId
   * ```
   */
  source: string
  /**
   * A next.js route pattern, for example:
   *
   * ```
   * /p/[productId]
   * ```
   */
  destination: string
}
