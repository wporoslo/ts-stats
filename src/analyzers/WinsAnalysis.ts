import {Analyzer} from '../Summary'
import {MatchResult} from '../MatchResult'
import {MatchData} from '../MatchData'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0

    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `${this.team} won ${wins} times.`
  }
}
