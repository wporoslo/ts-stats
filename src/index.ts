import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {MatchResult} from './MatchResult'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

matchReader.load()

const wonMatches = (team: string): void => {
  let gamesWon = 0

  for (const match of matchReader.matches) {
    if (match[1] === team && match[5] === MatchResult.HomeWin) {
      gamesWon++
    } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
      gamesWon++
    }
  }

  console.log(`${team} won ${gamesWon} games.`)
}

wonMatches('Man United')
