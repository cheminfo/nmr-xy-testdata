const { writeFileSync } = require('fs');
const { join } = require('path');
const recursive = require('recursive-readdir-synchronous');

let parentDir = join(__dirname, '..');

let files = recursive(join(__dirname, '../data')).map((file) =>
  file.replace(parentDir, '.'),
);

let toc = [];

for (let file of files) {
  let parts = file.split('/');
  toc.push({
    category: parts[2],
    filename: parts[3],
    url: file,
  });
}

writeFileSync(
  join(__dirname, '../toc.json'),
  JSON.stringify(toc, undefined, 2),
);
