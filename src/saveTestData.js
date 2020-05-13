const { writeFileSync } = require('fs');
const { join } = require('path');

const createTestData = require('./createTestData');

let data = createTestData();

writeFileSync(
  join(__dirname, 'noise.json'),
  JSON.stringify(data, undefined, 2),
  'utf8',
);
