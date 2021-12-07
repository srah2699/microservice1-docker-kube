import axios from 'axios';
import config from '../../config.json'
 
describe('Integration Testing - Microservice', () => {
    describe('testing GET /test/string', () => {
      test('Should be true', async () => {
        const result = await axios.get(`http://localhost:3005/test/pop`, {});
        expect(result.data).toBe(true);
      });
    });
  
   describe('Testing POST / ', () => {
      test('Should return value concat with E', async () => {
        const result = await axios.post(
          `http://localhost:3005/`,
          { value: 'A' },
        );
        expect(result.data.value).toBe('AE');
      });
    }); 
  });
  
