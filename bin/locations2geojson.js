var path = require('path');
var fs = require('fs');

var data = require('../data/locations');
var RE = /<a href=\"http\:\/\/www\.pubsgalore\.co\.uk\/pubs\/(\d+)\/\" target=\"_blank\">([^<]*)/i;

fs.writeFile(path.resolve(path.join(process.cwd(), 'data', 'locations.json')),
  JSON.stringify({ type: 'FeatureCollection',
    features: data.map(function (l) {
      var n = l[0].match(RE);
      return {
        type: 'Feature',
        properties: {
          name: n[2],
          id: n[1]
        },
        geometry: {
          type: 'Point',
          coordinates: l.slice(1)
        }
      };
    })
  }, 0, 0), {
  encoding: 'utf-8'
}, function() {
  console.log(data.length, 'records processed');
});
