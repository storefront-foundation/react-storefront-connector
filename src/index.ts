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
   * Searches for matching products
   */
  search: (params: SearchParams, req: Request, response: Response) => Promise<Result<SearchResult>>

  /**
   * Routing rules that map express-style path expressions to
   */
  routes: Route[]
}
