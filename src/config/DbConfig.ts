// DB Environment credentials 
const dotenv = require('dotenv');
dotenv.config({path: '../../env'});

import { createConnection } from 'typeorm';

export class DBConnection {
  
  constructor(){
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1punchdeveloper",
      database: "arcs-members",
      entities: [
        __dirname + "/entity/*.js"
      ],
      synchronize: true,
      logging: false
    }).then(connection => {
      console.log(`Connection successful!`);
    }).catch(error => console.log(error));
  }
  
}