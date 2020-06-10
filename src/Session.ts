export default interface Session {
  /**
   * The user's full name
   */
  name: string
  /**
   * The user's email
   */
  email?: string
  /**
   * The number of items in the cart
   */
  itemsInCart: number
  /**
   * The user's preferred currency
   */
  currency?: string
}
