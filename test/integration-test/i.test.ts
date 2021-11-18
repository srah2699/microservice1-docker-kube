import axios from 'axios';
import config from '../../config.json'
 
describe('Integration Testing - Microservice', () => {
    describe('testing GET /test/string', () => {
      test('Should be true', async () => {
        const result = await axios.get(`${config.URL}test/pop`, {});
        expect(result.data).toBe(true);
      });
    });
  
   describe('Testing POST / ', () => {
      test('Should return value concat with E', async () => {
        const result = await axios.post(
          `${config.URL}`,
          { value: 'A' },
        );
        expect(result.data.value).toBe('AE');
      });
    }); 
  });
  
