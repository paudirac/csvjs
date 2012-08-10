function to_csv (headers, array) {
    var csv = '';
    return csv;
};

var assert = require('assert');
exports = exports || {};
exports['csv'] = function (test) {
    var headers = undefined;
    var array = undefined;
    var csv = to_csv(headers, array);
    test.deepEqual(csv, '');
    test.done();
};