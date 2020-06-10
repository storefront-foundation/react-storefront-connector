import Media from './Media'
import ProductMedia from './ProductMedia'

export default interface Color {
  /**
   * The color code
   */
  id: string
  /**
   * The text to display
   */
  text: string
  /**
   * A CSS color value for the swatch
   */
  css?: string
  /**
   * The color swatch
   */
  image?: Media
  /**
   * Product images to display in the carousel when the color is selected.
   */
  media?: ProductMedia
}
