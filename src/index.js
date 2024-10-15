import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();

// ==================================================================================================================================================

// const bootstrap = async () => {
//   try {
//     await initMongoConnection();

//     setupServer();
//   } catch (error) {
//     console.log(error);
//   }
// };

// bootstrap();