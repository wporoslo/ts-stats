import {dateStringToDate} from './utils'
import {MatchResult} from './MatchResult'
import {MatchData} from './MatchData'

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchData[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6],
      ],
    )
  }
}
