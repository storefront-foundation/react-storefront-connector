import ProductSummary from './ProductSummary'
import ProductMedia from './ProductMedia'
import Color from './Color'
import Link from './Link'
import Size from './Size'
import CmsSlots from './CmsSlots'

/**
 * Data for the PDP
 */
export default interface ProductPageData {
  breadcrumbs: Link[]
  product: Product
}

/**
 * Information about a product
 */
export interface Product extends ProductSummary {
  sku?: string
  /**
   * The id used for looking up reviews for the product
   */
  reviewsKey?: string
  /**
   * The product description
   */
  description?: string
  /**
   * The product specs
   */
  specs?: string
  /**
   * HTML snippets from the CMS. Keys are slot names, values are HTML strings
   */
  slots?: CmsSlots
  /**
   * Product images and videos
   */
  media: ProductMedia
  /**
   * Available sizes
   */
  sizes?: Size[]
  /**
   * Available colors
   */
  colors?: Color[]
}
