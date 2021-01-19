import fs from 'fs'
import {OutputTarger} from '../Summary'

export class HtmlReport implements OutputTarger {
  constructor(public reportName: string) {}
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>`

    fs.writeFileSync(`${this.reportName}-report.html`, html)
  }
}
