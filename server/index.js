const express=require("express");
const app=express();
const cors=require('cors');
const conn = require("./conn");
app.use(cors())
app.use(express.json());

conn;
app.listen(5001,()=>{
    console.log("server is runnign at",5001)
})

app.get("/students", async (req, res) => {
    try {
    const query = 'SELECT * FROM "student"';
      const result = await conn.query(query); 
      res.status(200).json(result.rows);
    } catch (err) {
      console.error("Error during query execution:", err);
      res.status(400).json({
        message: "No students found or table does not exist.",
        error: err.message,
      });
    } finally {
      if (conn.release) {
        conn.release();
      }
    }
  });
  
  app.post("/add_student",async(req,res)=>{
    try {
        const {name}=req.body;
        const query = 'INSERT INTO "student" ("name") VALUES ($1) RETURNING *';
        const result = await conn.query(query, [name]);
        res.status(201).json({
            message: "Student added successfully",
            student: result.rows[0],  
          });
        
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({
          message: "Error adding student",
          error: error.message,
        });
    }
  })