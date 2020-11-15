describe('calculateMonthlyPayment() tests', function () {
	it('should calculate the monthly rate correctly', function () {
		const values = {
			amount: 900000,
			years: 15,
			rate: 2.799
		};
		expect(calculateMonthlyPayment(values)).toContain('$');
		expect(calculateMonthlyPayment(values)).toBe('$6128.60');
		expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
	});

	it('should return a result with 2 decimal places', function () {
		const values = {
			amount: 900000,
			years: 30,
			rate: 3.5
		};
		expect(calculateMonthlyPayment(values)).toContain('$');
		expect(calculateMonthlyPayment(values)).toBe('$4041.40');
		expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
	});

	it('should handle terribly high interest rates', function () {
		const values = {
			amount: 1500000,
			years: 30,
			rate: 99.999
		};
		expect(calculateMonthlyPayment(values)).toContain('$');
		expect(calculateMonthlyPayment(values)).toBe('$124998.75');
		expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
	});
});
