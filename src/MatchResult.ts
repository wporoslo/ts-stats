export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export type Match = [Date, string, string, number, number, MatchResult, string]
