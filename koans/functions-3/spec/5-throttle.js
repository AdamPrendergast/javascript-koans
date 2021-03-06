/*
 * function that updates div to currentts and is called from setTimeout(*, 0)
 * throttle jQuery.ajax
 * throttling + prioritization
 */
describe('Throttle', function (done) {
	it('1 - should never invoke the specified function twice within specified time interval', function () {
		var counter = 0, incrementCounter = function () {
			counter++;
		}, throttledIncrementCounter = SAMURAIPRINCIPLE.throttle(incrementCounter, 1000), interval;
		interval = setInterval(throttledIncrementCounter, 0);
		setTimeout(function () {
			expect(counter).toBe(1);
		}, 900);
		setTimeout(function () {
			expect(counter).toBe(2);
			clearInterval(interval);
			done();
		}, 1100);
	});
	it('2 - should invoke the specified function after specified interval ', function (done) {
		var counter = 0, incrementCounter = function () {
			counter++;
		}, throttledIncrementCounter = SAMURAIPRINCIPLE.throttle(incrementCounter, 1000);
		throttledIncrementCounter();
		throttledIncrementCounter();
		expect(counter).toBe(1);
		setTimeout(function () {
			expect(counter).toBe(2);
			done();
		}, 1100);
	});
	it('3 - should just demonstrate throttle in action - no tests', function (done) {
		var counter = 0, counterElement = jQuery('#counter'),
		setCounter = function (value) {
			counterElement.text(value);
		}, throttledSetCounter = SAMURAIPRINCIPLE.throttle(setCounter, 1000);
		setInterval(function () {
			counter++;
			throttledSetCounter(counter);
		}, 100);
		setTimeout(done, 10000);
	});
	/*
	 * For bonus points - how would you go about this?
	 * Obviously, you'll have to change other tests if you want to accomplish this
	 * Discuss with your pair what the advantage of this could be?
	 *
	it('should invoke the specified function after specified interval ', function () {
		var counter = 0, incrementCounter = function () {
			counter++;
		}, throttledIncrementCounter = SAMURAIPRINCIPLE.throttle(incrementCounter, 1000), interval;
		throttledIncrementCounter();
		throttledIncrementCounter();
		throttledIncrementCounter();
		throttledIncrementCounter();
		interval = setInterval(throttledIncrementCounter, 100);
		expect(counter).toBe(0);
		waits(0);
		runs(function () {
			expect(counter).toBe(4);
		});
		waits(1100);
		runs(function () {
			clearInterval(interval);
			expect(counter).toBe(5);
		});
	});
	*/
});
