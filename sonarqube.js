import scanner from 'sonarqube-scanner';
// const scanner = require('sonarqube-scanner');

const options = {
  'sonar.projectKey': 'IT-JS-repo',
  'sonar.projectName': 'IT-JS-repo',
  'sonar.qualitygate.wait': 'true',
  // 'sonar.sources': 'server',
  // 'sonar.tests': 'spec',
  // 'sonar.test.inclusions': '',
  // 'sonar.testExecutionReportPaths': 'test-report.xml',
  // 'sonar.eslint.reportPaths': 'eslint-report.json',
};

if (process.env.CI) {
  if (process.env.IS_PULL_REQUEST_MERGED === 'true') {
    options['sonar.branch.name'] = process.env.BASE_BRANCH;
  } else {
    options['sonar.pullrequest.key'] = process.env.PR_ID;
    options['sonar.pullrequest.base'] = process.env.BASE_BRANCH;
    options['sonar.pullrequest.branch'] = process.env.HEAD_BRANCH;
  }
}
// else {
//   const getCurrentBranchName = require('node-git-current-branch');
//   options['sonar.branch.name'] = getCurrentBranchName();
// }

scanner(
  {
    serverUrl: 'https://sonar.anywhere.co', // hosted url for sonar
    token: process.env.SONAR_TOKEN,
    options,
  },

  () => process.exit(),
);

// import scanner from 'sonarqube-scanner';
// // const scanner = import("sonarqube-scanner");

// scanner(
//   {
//     serverUrl: 'https://sonar.anywhere.co',
//     token: process.env.SONAR_TOKEN,
//     options: {
//       'sonar.projectKey': 'IT-JS-repo',
//       'sonar.projectName': 'IT-JS-repo',
//       // "sonar.sources":
//       // "sonar.tests": "packages/",
//       // "sonar.test.inclusions": "packages/**/test/**/*",
//       // "sonar.exclusions": "packages/intercom/src/datastore/methods.js",
//       // "sonar.javascript.lcov.reportPaths": "packages/**/lcov.info",
//     },
//   },
//   () => process.exit(),
// );

// // const scanner = import('sonarqube-scanner'); // eslint-disable-line

// // const options = {
// //   'sonar.projectKey': 'IT-JS-repo',
// //   'sonar.projectName': 'IT-JS-repo',
// //   'sonar.qualitygate.wait': 'false',
// // };

// // if (process.env.CI) {
// //   if (process.env.IS_PULL_REQUEST_MERGED === 'true') {
// //     options['sonar.branch.name'] = process.env.BASE_BRANCH;
// //   } else {
// //     options['sonar.pullrequest.key'] = process.env.PR_ID;
// //     options['sonar.pullrequest.base'] = process.env.BASE_BRANCH;
// //     options['sonar.pullrequest.branch'] = process.env.HEAD_BRANCH;
// //   }
// // } else {
// //   const getCurrentBranchName = require('node-git-current-branch'); // eslint-disable-line
// //   options['sonar.branch.name'] = getCurrentBranchName();
// // }

// // scanner(
// //   {
// //     serverUrl: 'https://staging.sonar.anywhere.co',
// //     token: process.env.SONAR_TOKEN,
// //     options,
// //   },
// //   () => process.exit(),
// // );
