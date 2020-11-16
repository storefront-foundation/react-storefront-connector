import HomePageData from './HomePageData'
import Result from './Result'
import SubcategoryParams from './SubcategoryParams'
import SubcategoryPageData from './SubcategoryPageData'
import ProductParams from './ProductParams'
import ProductPageData, { Product } from './ProductPageData'
import SearchSuggestions from './SearchSuggestions'
import Session from './Session'
import SearchParams from './SearchParams'
import SearchResult from './SearchResult'
import CmsSlots from './CmsSlots'
import ProductSlotsParams from './ProductSlotsParams'
import Route from './Route'
import CartResponse from './CartResponse'
import CartItem from './CartItem'
import SignUpData from './SignUpData'
import PrerenderPath from './PrerenderPath'

/**
 * The main connector interface. An implementation of this interface should be the default export from your
 * connector package.
 */
export default interface Connector {
  /**
   * Returns data for the home page
   */
  home: (request: Request, response: Response) => Promise<Result<HomePageData>>

  /**
   * Returns data for the PLP
   * @param params Criteria used to look up the subcategory
   * @param request The http request
   * @param response The http response
   */
  subcategory: (
    params: SubcategoryParams,
    request: Request,
    response: Response
  ) => Promise<Result<SubcategoryPageData>>

  /**
   * Returns data for the PDP
   * @param params Criteria used to look up the product and variant
   * @param request The http request
   * @param response The http response
   */
  product: (
    params: ProductParams,
    request: Request,
    response: Response
  ) => Promise<Result<ProductPageData>>

  /**
   * Returns the HTML for a late-loaded CMS slot on the product page.  For example,
   * it's common to late load reviews as an HTML blob retrieved from a 3rd party review provider.
   */
  productSlots: (params: ProductSlotsParams, request: Request, res: Response) => CmsSlots

  /**
   * Returns suggested products based on a product being viewed
   * @param id The product id
   * @param request The http request
   * @param response The http response
   */
  productSuggestions: (id: string, request: Request, response: Response) => Promise<Product[]>

  /**
   * Returns suggestions based on the user's search text
   * @param query The user's search text
   * @param request The http request
   * @param response The http response
   */
  searchSuggestions: (
    query: string,
    request: Request,
    response: Response
  ) => Promise<SearchSuggestions>

  /**
   * Retreives session information
   * @param request The http request
   * @param response The http response
   */
  session: (request: Request, response: Response) => Promise<Session>

  /**
   * Returns data for the cart page
   * @param request The http request
   * @param response The http response
   */
  cart: (request: Request, response: Response) => Promise<Result<CartResponse>>

  /**
   * Adds product to cart
   * @param product the product to add
   * @param quantity the quantity of product to add
   * @param request The http request
   * @param response The http response
   */
  addToCart: (
    product: Product,
    quantity: number,
    request: Request,
    response: Response
  ) => Promise<CartResponse>

  /**
   * Updates an item in the cart
   * @param item The item to update
   * @param quantity The new quantity to apply
   * @param request The http request
   * @param response The http response
   */
  updateCartItem: (
    item: CartItem,
    quantity: number,
    request: Request,
    response: Response
  ) => Promise<CartResponse>

  /**
   * Removes item in the cart
   * @param item The item to remove
   * @param request The http request
   * @param response The http response
   */
  removeCartItem: (item: CartItem, request: Request, response: Response) => Promise<CartResponse>

  /**
   * Searches for matching products
   * @param request The http request
   * @param response The http response
   */
  search: (
    params: SearchParams,
    request: Request,
    response: Response
  ) => Promise<Result<SearchResult>>

  /**
   * Signs the user in to their account
   * @param email
   * @param password
   * @param request The http request
   * @param response The http response
   * @return data to apply to the session
   */
  signIn: (
    email: string,
    password: string,
    request: Request,
    response: Response
  ) => Promise<Session>

  /**
   * Signs the user out
   * @param request The http request
   * @param response The http response
   */
  signOut: (request: Request, response: Response) => Promise<Session>

  /**
   * Signs the user up for an account
   * @param data Data to apply when creating the account
   * @param request The http request
   * @param response The http response
   */
  signUp: (data: SignUpData, request: Request, response: Response) => Promise<Session>

  /**
   * Fetches paths to prerender on deploy
   * @param options Options for fetching which may be different for each connector
   */
  getPrerenderPaths: (options: object) => Promise<PrerenderPath[]>

  /**
   * Routing rules that map express-style path expressions to next.js page routes. Use routes to map
   * the URL used by the target platform to standard routes in the React Storefront starter app.
   *
   * For example, if the platform uses /products for product pages instead of /p, use:
   *
   * ```js
   * [{ source: '/products/:productId', destination: '/p/[productId]' }]
   * ```
   */
  routes: Route[]
}
