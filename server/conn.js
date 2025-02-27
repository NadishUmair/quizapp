const {Client}=require("pg");
const { password } = require("pg/lib/defaults");


const conn=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"12345",
    database:"demoDb"
})

conn.connect()
.then(()=>console.log("database connected"))
.catch(err=>console.log("error in conection",err.stack));

module.exports=conn;