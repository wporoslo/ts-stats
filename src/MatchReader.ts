import {dateStringToDate} from './utils'
import {MatchResult} from './MatchResult'
import {MatchData} from './MatchData'
import {CsvFileReader} from './CsvFileReader'

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  static fromCsv(filename: string) {
    return new MatchReader(new CsvFileReader(filename))
  }

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
