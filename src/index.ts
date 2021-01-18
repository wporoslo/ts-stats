import {MatchReader} from './MatchReader'
import {MatchResult} from './MatchResult'

const reader = new MatchReader('football.csv')

reader.read()

const wonMatches = (team: string): void => {
  let gamesWon = 0

  for (const match of reader.data) {
    if (match[1] === team && match[5] === MatchResult.HomeWin) {
      gamesWon++
    } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
      gamesWon++
    }
  }

  console.log(`${team} won ${gamesWon} games.`)
}

wonMatches('Man United')
