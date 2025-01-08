

const dotenv = require('dotenv');


dotenv.config();

const requiredEnvVariables = ['MONGODB_URL', 'PORT', 'SECRET_KEY']; 

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Error: Missing required environment variable: ${key}`);
    process.exit(1); 
  }
});

console.log('Environment variables loaded successfully');
