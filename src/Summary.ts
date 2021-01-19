import {MatchData} from './MatchData'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {HtmlReport} from './reportTargets/HtmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarger {
  print(report: string): void
}

export class Summary {
  static winsAnalysisAndHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(team))
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarger) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches))
  }
}
