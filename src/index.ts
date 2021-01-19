import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {Summary} from './Summary'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {HtmlReport} from './reportTargets/HtmlReport'
import {ConsoleReport} from './reportTargets/ConsoleReport'

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

//
const summary = new Summary(
  new WinsAnalysis('Liverpool'),
  new HtmlReport('liverpool'),
)
summary.buildAndPrintReport(matchReader.matches)
