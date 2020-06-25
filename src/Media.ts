/**
 * Represents an image or video
 */
export default interface Media {
  /**
   * The URL
   */
  src: string
  /**
   * Alt text to be displayed for accessibility
   */
  alt: string
  /**
   * The type of media
   */
  type: 'image' | 'video'
}
