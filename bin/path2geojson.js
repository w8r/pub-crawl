var path = require('path');
var fs = require('fs');
var polyline = require('polyline');

var data = require('../data/path');

fs.writeFile(path.resolve(path.join(process.cwd(), 'data', 'path.json')),
  JSON.stringify({
    type: 'Feature',
    geometry: {
      type: 'MultiLineString',
      coordinates: data.map(polyline.decode)
    }
  }, 0, 2), {
  encoding: 'utf-8'
}, function() {
  console.log(data.length, 'records processed');
});
