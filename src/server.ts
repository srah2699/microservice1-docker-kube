import app from './app'
import secrets from '../config.json'

const secretString = JSON.parse(secrets.SecretString);
const {PORT} = secretString

app.listen(PORT, () => {
    console.log("listening")
});