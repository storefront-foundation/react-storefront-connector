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
import Cart from './Cart'

/**
 * The main connector interface. An implementation of this interface should be the default export from your
 * connector package.
 */
export default interface Connector {
  /**
   * Returns data for the home page
   */
  home: (req: Request, response: Response) => Promise<Result<HomePageData>>

  /**
   * Returns data for the PLP
   */
  subcategory: (
    params: SubcategoryParams,
    req: Request,
    response: Response
  ) => Promise<Result<SubcategoryPageData>>

  /**
   * Returns data for the PDP
   */
  product: (
    params: ProductParams,
    req: Request,
    response: Response
  ) => Promise<Result<ProductPageData>>

  /**
   * Returns the HTML for a late-loaded CMS slot on the product page.  For example,
   * it's common to late load reviews as an HTML blob retrieved from a 3rd party review provider.
   */
  productSlots: (params: ProductSlotsParams, req: Request, res: Response) => CmsSlots

  /**
   * Returns suggested products
   */
  productSuggestions: (id: string, req: Request, response: Response) => Promise<Product[]>

  /**
   * Returns suggestions based on the user's search text
   */
  searchSuggestions: (query: string, req: Request, response: Response) => Promise<SearchSuggestions>

  /**
   * Retreives session information
   */
  session: (req: Request, response: Response) => Promise<Session>

  /**
   * Returns data for the cart page
   */
  cart: (req: Request, response: Response) => Promise<Result<CartResponse>>

  /**
   * Adds product to cart
   */
  addToCart: (
    product: Product,
    quantity: number,
    req: Request,
    response: Response
  ) => Promise<CartResponse>

  /**
   * Updates the products in the cart
   */
  updateCart: (cart: Cart, req: Request, response: Response) => Promise<CartResponse>

  /**
   * Searches for matching products
   */
  search: (params: SearchParams, req: Request, response: Response) => Promise<Result<SearchResult>>

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
