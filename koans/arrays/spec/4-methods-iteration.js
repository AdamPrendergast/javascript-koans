/*global describe, expect, it, __*/
describe('Arrays - iteration methods', function () {


	it('1 - should understand filter', function () {
		var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
		expect(array.filter(function (element) {
			return element <= 3;
		})).toEqual([1, 2, 3, 3, 2, 1]);
	});


	
	// 2 - Help
	// http://msdn.microsoft.com/en-us/library/ie/ff679973(v=vs.94).aspx
	// http://stackoverflow.com/questions/4119324/passing-in-dynamic-keyvalue-pairs-to-an-object-literal
	it('2 - should understand filter with this', function () {
		var array = [1, 2, 3, 4, 5, 4, 3, 2, 1], THIS = {};
		expect(array.filter(function (element) {
			if (this[element]) {
				return false;
			} else {
				this[element] = true;
				return true;
			}
			//return this[element] ? false : this[element] = true;
		}, THIS)).toEqual([1, 2, 3, 4, 5]);
		expect(THIS).toEqual({ 1: true, 2: true, 3: true, 4: true, 5: true });
	});



	it('3 - should understand forEach', function () {
		var array = [1, 2, 3, 4, 5], result = 0;
		array.forEach(function (element) {
			result += element;
		});
		expect(result).toBe(15);
	});



	it('4 - should understand forEach with this', function () {
		var array = [1, 2, 3, 4, 5, 4, 3, 2, 1], result = 0;
		array.forEach(function (element) {
			if (!this[element]) {
				result += element;
			}
			this[element] = true;
		}, {});
		expect(result).toBe(15);
	});



	it('5 - should understand every', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.every(function (element, index) {
			return element > index;
		})).toEqual(true);
	});



	it('6 - should understand map', function () {
		var array = ['Myamoto', 'Hattori', 'Dave'];
		expect(array.map(function (element, index) {
			return index + ' - ' + element;
		})).toEqual(['0 - Myamoto', '1 - Hattori', '2 - Dave']);
	});



	it('7 - should understand some', function () {
		var array = [1, 2, 3, 4, 5], isNegative = function (element) {
			return element < 0;
		};
		expect(array.some(isNegative)).toBe(false);
		array[2] = -array[2];
		expect(array.some(isNegative)).toBe(true);
	});



	it('8 - should understand reduce', function () {
		var array = [1, 2, 3, 4, 5], product = function (previousValue, currentValue) {
			return previousValue * currentValue;
		};
		expect(array.reduce(product, 1)).toBe(120);
	});



	it('9 - should understand reduceRight', function () {
		var array = [1, 2, 3, 4, 5], product = function (previousValue, currentValue) {
			return previousValue * currentValue;
		};
		expect(array.reduceRight(product, 1)).toBe(120);
	});



	it('10 - should understand map and reduce', function () {
		var result = new Array(10).join(',.').split(',')
			.map(function (value, index) {
				return index;
			})
			.reduce(function (previousValue, value) {
				return previousValue + value * value;
			}, 0);
		expect(result).toBe(285);
	});

	// Working out for '10 - should understand map and reduce'
	//   0 + 0 * 0 == 0
	//   0 + 1 * 1 == 1
	//   1 + 2 * 2 == 5
	//   5 + 3 * 3 == 14
	//  14 + 4 * 4 == 30
	//  30 + 5 * 5 == 55
	//  55 + 6 * 6 == 91
	//  91 + 7 * 7 == 140
	// 140 + 8 * 8 == 204
	// 204 + 9 * 9 == 285



	it('11 - should understand map and parseInt', function () {
		var result = ['1', '2', '3'].map(parseInt);
		expect(result).toEqual([1, NaN, NaN]);
		//discuss with your pair
	});

	// Map passes more arguments
	// callback(item, index, array)
	// ParseInt takes a 'base' as second argument
	// parseInt(string, base)
	// http://stackoverflow.com/questions/2647798/javascript-1-6-array-map-and-array-filter-not-working-with-built-in-function


});
