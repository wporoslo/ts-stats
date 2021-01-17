export const dateStringToDate = (date: string): Date => {
  const dateParts = date
    .split('/')
    .map((value: string): number => parseInt(value, 10))
  const day = dateParts[0]
  const month = dateParts[1] - 1
  const year = dateParts[2]
  return new Date(year, month, day)
}
