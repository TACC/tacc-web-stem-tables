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
    entry[getYearBoolKeyName(entry)] = true;
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

/** Build the key name for boolean version of year property */
function getYearBoolKeyName(entry) {
  return `is_${entry.year}`;
}

// Manipulate data
data = wrap(data);
data = format(data);
// console.log(data);

module.exports = data;
