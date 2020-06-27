import { Component, OnInit, Input } from '@angular/core';

import { Period } from '../periods/shared/period-model'

// export interface Compound {
//   contribution: number;
//   interestEarned: number;
//   balance: number;
// }

// export interface Rollover {
//   compounds: Compound[];
// }

// export interface PeriodResult {
//   initialBalance: number;
//   rollovers: Rollover[];
//   totalContributionsForPeriod: number;
//   totalInterestEarnedForPeriod: number;
//   endOfPeriodBalance: number;
// }

// const PERIOD_RESULT_DATA: PeriodResult[] = [
//   {
//     initialBalance: 0,
//     rollovers: [
//       {
//         compounds: [
//           {contribution: 2500, interestEarned: 16.666666666666668, balance: 2516.6666666666665},
//           {contribution: 2500, interestEarned: 33.44444444444444, balance: 5050.11111111111},
//           {contribution: 2500, interestEarned: 50.334074074074074, balance: 7600.4451851851845},
//           {contribution: 2500, interestEarned: 67.3363012345679, balance: 10167.781486419752},
//           {contribution: 2500, interestEarned: 84.45187657613168, balance: 12752.233362995883},
//           {contribution: 2500, interestEarned: 101.68155575330589, balance: 15353.91491874919},
//           {contribution: 2500, interestEarned: 119.02609945832793, balance: 17972.94101820752},
//           {contribution: 2500, interestEarned: 136.4862734547168, balance: 20609.427291662236},
//           {contribution: 2500, interestEarned: 154.0628486110816, balance: 23263.490140273316},
//           {contribution: 2500, interestEarned: 171.75660093515546, balance: 25935.24674120847},
//           {contribution: 2500, interestEarned: 189.5683116080565, balance: 28624.815052816528},
//           {contribution: 2500, interestEarned: 207.49876701877687, balance: 31332.313819835304}
//         ]
//       },
//       {
//         compounds: [
//           {contribution: 2500, interestEarned: 225.54875879890204, balance: 34057.86257863421},
//           {contribution: 2500, interestEarned: 243.7190838575614, balance: 36801.58166249177},
//           {contribution: 2500, interestEarned: 262.0105444166118, balance: 39563.59220690838},
//           {contribution: 2500, interestEarned: 280.4239480460559, balance: 42344.016154954435},
//           {contribution: 2500, interestEarned: 298.96010769969627, balance: 45142.976262654134},
//           {contribution: 2500, interestEarned: 317.6198417510276, balance: 47960.59610440516},
//           {contribution: 2500, interestEarned: 336.40397402936776, balance: 50797.000078434525},
//           {contribution: 2500, interestEarned: 355.3133338562302, balance: 53652.31341229076},
//           {contribution: 2500, interestEarned: 374.3487560819384, balance: 56526.6621683727},
//           {contribution: 2500, interestEarned: 393.5110811224847, balance: 59420.17324949519},
//           {contribution: 2500, interestEarned: 412.8011549966346, balance: 62332.97440449182},
//           {contribution: 2500, interestEarned: 432.21982936327885, balance: 65265.194233855094}
//         ]
//       }
//     ],
//     totalContributionsForPeriod: 60000,
//     totalInterestEarnedForPeriod: 5265.194233855096,
//     endOfPeriodBalance: 65265.194233855094
//   },
//   {
//     initialBalance: 65265.194233855094,
//     rollovers: [
//       {
//         compounds: [
//           {contribution: 4000, interestEarned: 1385.3038846771017, balance: 70650.4981185322},
//           {contribution: 4000, interestEarned: 1493.009962370644, balance: 76143.50808090284},
//           {contribution: 4000, interestEarned: 1602.870161618057, balance: 81746.3782425209},
//           {contribution: 4000, interestEarned: 1714.927564850418, balance: 87461.30580737132}
//         ]
//       }
//     ],
//     totalContributionsForPeriod: 16000,
//     totalInterestEarnedForPeriod: 6196.111573516221,
//     endOfPeriodBalance: 87461.30580737132
//   }
// ]

@Component({
  selector: 'app-data-results',
  templateUrl: './data-results.component.html',
  styleUrls: ['./data-results.component.scss']
})
export class DataResultsComponent implements OnInit {
  @Input() periods: Period[];
  
  displayedColumns: string[] = ["period", "contributions", "interest-earned", "balance"];
  // dataSource = PERIOD_RESULT_DATA;
  dataSource = this.periods;

  constructor() { }

  ngOnInit(): void {
  }

}
