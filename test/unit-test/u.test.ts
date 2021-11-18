import palindrome from "../../src/palindrome";
import app from "../../src/app";
import supertest from "supertest";

describe('Testing function exists or not', () => {
    test('function should present and can be called', () => {
      expect(palindrome).toBeDefined();
    });
});

describe('bright is not palindrome', () => {
    test('function should return false', () => {
        expect(palindrome("bright")).toEqual(false);
    })
})
  
describe('radar is a palindrome', () => {
    test('function should return false', () => {
        expect(palindrome("radar")).toEqual(true);
    })
})


describe('testing / endpoint', () => {
    test('should respond 200 ok', async () => {
    const result = await supertest(app)
    .post('/')
    .send({
        value: 'a',
    });
    expect(result.statusCode).toEqual(200);
    expect(result.body.value).toBe('aE');
    })
})

describe('testing / endpoint without body', () => {
    test('should respond 500', async () => {
    const result = await supertest(app)
    .post('/')
    expect(result.statusCode).toEqual(500);
    })
})

