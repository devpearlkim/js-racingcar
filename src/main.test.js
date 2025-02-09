import { Car } from './main';

const name = 'jinju';

test('should create a car with a given name', () => {
  const car = new Car(name);

  expect(car).toEqual(expect.objectContaining({ name }));
});

test('should throw an error if name is not provided', () => {
  expect(() => new Car()).toThrow('car name is required');
});

test('should initialize the car with position 0', () => {
  const car = new Car(name);

  expect(car.position).toBe(0);
});

test('should increase the position by 1 when the car moves', () => {
  const car = new Car(name);
  const initialPosition = car.position;

  car.move();

  expect(car.position).toBe(initialPosition + 1);
});
