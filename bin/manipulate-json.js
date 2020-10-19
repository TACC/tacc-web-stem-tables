// Include dependencies
const fs = require('fs');

// Get data
const json = fs.readFileSync('./assets/_data.json', 'utf8');
let data = JSON.parse(json);

/** Wrap all data in a manner that mustache templates expect */
function wrap(data) {
  const newData = { entries: data };

  return newData;
}

/** Format certain data */
function format(data) {
  data['entries'].forEach( entry => {
    entry.project_name = formatProjectName(entry.project_name);
  });

  return data;
}

/** Format (clear out) project name for certain values */
function formatProjectName(name) {
  const negativeValues = [
    'Not available'
  ];

  // WARNING: The possibly conditions may increase
  shouldClear = negativeValues.some( value => {
    return (name === value);
  });

  return shouldClear ? '' : name;
}

/** Insert separator rows */
function insert(data) {
  const newData = { entries: [] };
  let previousYear;
  let isNewYear;

  data['entries'].forEach( entry => {
    const separatorEntry = {
      is_separator: true,
      year: entry.year
    };

    isNewYear = (entry.year !== previousYear);
    previousYear = entry.year;

    if (isNewYear) {
      newData['entries'].push( separatorEntry );
    }
    newData['entries'].push( entry );
  });

  return newData;
}

// Manipulate data
data = wrap(data);
data = format(data);
data = insert(data);
// console.log(data);

module.exports = data;
