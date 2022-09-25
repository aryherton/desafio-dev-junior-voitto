import http from 'http';
import Server from './app';

import 'dotenv/config';

const port = process.env.PORT || 3333;

const server = http.Server(Server);
server.listen(port, () => console.log(`Server ouvindo a porta -> ${port}`));
