import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle.js';

test('should output rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(10, 15);
    expect(perimeter).toBe(50);
});

test('should generate a rectangle area', () => {
    const area = getRectangleArea(10, 15);
    expect(area).toBe(150);
})

test('should generate a rectangle info', () => {
    const info = getRectangleInfo(10, 15);
    expect(info).toBe(console.log('The perimeter of a rectangle is 50 and the area is 150'));
})