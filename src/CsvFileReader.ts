import fs from 'fs'
import {dateStringToDate} from './utils'
import {MatchResult, Match} from './MatchResult'

export class CsvFileReader {
  data: Match[] = []

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (row: string[]): Match => [
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
