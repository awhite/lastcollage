/*
Script to add a new revision to the changelog JSON file. Pulls version from package.json, grabs current date
*/

const fs = require('fs');
const path = require('path');

const changelog = require('../src/data/changelog.json');
const pkg = require('../package.json');

const newRelease = {
  "versionCode": pkg.version,
  "dateMillis": Date.now(),
  "changes": [
    {
      "title": "[New Release]",
      "bullets": [
        "[Change 1]",
        "[Change 2]"
      ]
    }
  ]
};

const newChangelog = {
  ...changelog,
  releases: [
    ...changelog.releases,
    newRelease,
  ]
};

fs.writeFileSync(path.resolve('./src/data/changelog.json'), JSON.stringify(newChangelog, null, 2));
