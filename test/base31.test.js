const tap = require('tap')
const base31 = require('../index.js')

tap.equal(base31.encode(1547625598), '3s3tfge');
tap.equal(base31.decode('3s3tfge'), 1547625598);

tap.equal(base31.encode(1547625598410), '3u9tq8cjc');
tap.equal(base31.decode('3u9tq8cjc'), 1547625598410);

tap.equal(base31.encode(0), '2');
tap.equal(base31.decode('2'), 0);


tap.equal(base31.encode(100), '59');
tap.equal(base31.decode('59'), 100);


tap.equal(base31.encode(2207241000000), '4m92pydfp');
tap.equal(base31.decode('4m92pydfp'), 2207241000000);