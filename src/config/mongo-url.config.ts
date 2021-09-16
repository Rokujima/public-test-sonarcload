import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.MONGOS_URI,
}));
