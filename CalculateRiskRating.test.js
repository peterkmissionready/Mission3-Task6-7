const CalculateRiskRating = require('./CalculateRiskRating');
test('what happened',() =>{
	expect(CalculateRiskRating("My only car accident was when I turned left, the car behind ended bumping the rear of my car")).toBe(1);
});

test('Numbers only',() =>{
    expect(CalculateRiskRating(22222)).toBe("Error- not a string");
});
test('empty string',() =>{
    expect(CalculateRiskRating("")).toBe("Error- empty string");
});

test('Whitespace only',() =>{
    expect(CalculateRiskRating("        ")).toBe("Error- has only whitespace");
});
test('No letters',() =>{
	expect(CalculateRiskRating("*-/+0(#@|]\\")).toBe("Error- doesn't contain a letter");
});

test('Title of a movie',() =>{
	expect(CalculateRiskRating("bump and crash")).toBe(2);
});

test('expect not a string',() =>{
	expect(CalculateRiskRating(null)).toBe("Error- not a string");
});
