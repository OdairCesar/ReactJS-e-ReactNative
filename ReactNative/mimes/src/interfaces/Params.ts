export default interface Params {
  blockSize: number,
  borderSize: number,
  fontSize: number,
  headerRatio: number,
  difficultLevel: number,
  getColumnsAmount(): number,
  getRowsAmount(): number
}