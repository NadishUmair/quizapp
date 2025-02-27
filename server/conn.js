const {Client}=require("pg");
const { password } = require("pg/lib/defaults");


const conn=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:process.env.PASSWORD,
    database:"demoDb"
})

conn.connect()
.then(()=>console.log("database connected"))
.catch(err=>console.log("error in conection",err.stack));

module.exports=conn;