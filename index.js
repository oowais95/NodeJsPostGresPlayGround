const {Client} = require('pg')
const { host, port, password, database } = require('pg/lib/defaults')


const client = new Client({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password:"admin",
    database:"postgres"
})

client.connect();
 
client.query('Select * from customer where name = $1', ['shahd'], (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end().catch(() => {});


})

console.log("test")