
var encode = function (obj) { return encodeURIComponent(obj); };

var to_csv = function (headers, array) {
    var csv = '';
    for (var i in headers) {
	csv += headers[i];
	csv += ';';
    }
    csv = csv.substring(0, csv.length - 1);
    csv += '\n';
    for (var i = 0, len = array.length; i < len; i++) {
	for (var j in headers) {	    
	    csv += array[i][headers[j]] || '';
	    csv += ';';
	}
	csv = csv.substring(0, csv.length - 1);
	csv += '\n';
    }
    csv = csv.substring(0,csv.length - 1);
    return encode(csv);
};

// nodeunit tests
var assert = require('assert');
exports = exports || {};
exports['csv'] = function (test) {
    var headers = ['Name', 'Surname', 'Age'];
    var array = [];
    array.push({
	Name: 'Pau',
	Surname: 'Cervera',
	Age: 34
    });
    var csv = to_csv(headers, array);
    console.log(csv);
    test.deepEqual(csv, encode('Name;Surname;Age\nPau;Cervera;34'));
    test.done();
};