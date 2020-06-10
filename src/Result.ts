import AppData from './AppData'

export default interface Result<T> {
  appData: AppData
  pageData: T
}
