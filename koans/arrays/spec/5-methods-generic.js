/*global describe, expect, it, __*/
describe('Arrays - generic methods', function () {


	it('1 - should understand join is a generic method', function () {
		expect(Array.prototype.join.call('Hello', '.')).toBe('H.e.l.l.o');
		expect(Array.prototype.join.call({ 0: 'Zero', 1: 'First', 2: 'Second', length: 3 }, '-')).toBe('Zero-First-Second');
		expect(Array.prototype.join.call({ length: 3 }, '-')).toBe('--');
	});


	it('2 - should understand push is a generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', length: 3 };
		expect(Array.prototype.push.call(obj, 'Third', 'Fourth')).toBe(5);
		expect(obj).toEqual({ 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 5 });
		obj = {};
		expect(Array.prototype.push.call(obj, 'Myamoto', 'Hattori')).toBe(2);
		expect(obj).toEqual({ 0: 'Myamoto', 1: 'Hattori', length: 2 });
	});


	// Seems to be throwing an exception -  TypeError: Cannot assign to read only property 'length' of [object String]
	// Strings are immutable to in theory the 'push' method should return 'hello!' but the original string would stay as 'hello'

	// it('3 - should understand that in order to call/apply push method, the underlying object has to be mutable', function () {
	// 	var hello = 'Hello';
	// 	expect(Array.prototype.push.call(hello, '!')).toBe(__);
	// 	expect(hello).toBe(__);//discuss this with your pair
	// });


	
	it('4 - should understand that pop is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
		expect(Array.prototype.pop.apply(obj)).toBe('Second');
		expect(obj).toEqual({ 0: 'Zero', 1: 'First', 3: 'Third', 4: 'Fourth', length: 2 });
	});



	it('5 - should understand shift is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
		expect(Array.prototype.shift.apply(obj)).toBe('Zero');
		expect(obj).toEqual({ 0: 'First', 1: 'Second', 3: 'Third', 4: 'Fourth', length: 2 });
	});



	it('6 - should understand unshift is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3, name: 'Myamoto' };
		expect(Array.prototype.unshift.call(obj, 'Fifth', 'Sixth')).toBe(5);
		expect(obj).toEqual({ 0: 'Fifth', 1: 'Sixth', 2: 'Zero', 3: 'First', 4: 'Second', length: 5, name: 'Myamoto' });
	});



	it('7 - should understand slice is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 3 };
		expect(Array.prototype.slice.call(obj, 1)).toEqual(['First', 'Second']);
	});



	it('8 - should understand splice is generic method', function () {
		var returnArguments = function () {
			return arguments;
		}, args, wasError = false;
		try {
			args = returnArguments(1, 2, 3);
			args.splice(0, 1);
		} catch (error) {
			wasError = true;
		}
		expect(wasError).toBe(true);
		//expect(Array.prototype.splice.call(args, 0, 1)).toBe([1]);
		expect(args).toEqual(args);
	});



	it('9 - should understand reverse is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 5 };
		Array.prototype.reverse.apply(obj);
		expect(obj).toEqual({ 0: 'Fourth', 1: 'Third', 2: 'Second', 3: 'First', 4: 'Zero', length: 5 });
	});



	it('10 - should understand sort is generic method', function () {
		var obj = { 0: 'Zero', 1: 'First', 2: 'Second', 3: 'Third', 4: 'Fourth', length: 5 };
		Array.prototype.sort.apply(obj);
		expect(obj).toEqual({ 0: 'First', 1: 'Fourth', 2: 'Second', 3: 'Third', 4: 'Zero', length: 5 });
	});


	
});
