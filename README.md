# Data Manager MERN Stack
<p>
    Simple pern app that connects to Postgres Database
</p>

Features: <br>

+ insert data
+ update
+ get data
+ get data : id
+ delete data



# 1. Node Dependencies
<p>

<b>Dependencies:<b>

+ "dotenv":
+ "express"
+ "pg"

<b>Dev dependencies:<b> 

+ nodemon

</p>

# 2. Git ignore files 
+ /package-lock.json
+ /package.json
+ /config/config.env


# 3 APP COMPONENETS 

       
## 1. SeConfig/
+ Postgres/
  + database.sql <br>
    
     ```
     -- Create DB 
     CREATE DATABASE test_db;

     -- Create table 
     CREATE TABLE test_tb(
     test_tb_id SERIAL PRIMARY KEY,
     test_description VARCHAR(255)
     );
     ```
    
  + db.js

+ config.env

## 2. Handlers/
#### (errorHandlers.js)
    
Handler 1: (catchErrors) Catch Errors Handler <br>
Desc:  catch url string errors

Handler 5:  notFound <br>
Desc:   404 Page Error
   
## 3. Routes/ Controllers
#### 7.1 main.route.js:
    
     ```
     type: /post
     Route: /new
     Controller: newData
     ```
    
     ```
     type: /post
     Route: /get
     Controller: getdata
     ```
    
    
     ```
     type: /post
     Route: /get/:id"
     Controller: getData_id
     ```
    
    
     ```
     type: /post
     Route: /update
     Controller: updateData
     ```
    
    
     ```
     type: /delte
     Route: /delete/:id
     Controller: deleteData
     ```
    
    
## 4. .env.js:        
+ NODE_ENV=
+ ENV_PORT=
+ POSTGRES_SER=""
+ POSTGRES_HOST=+
+ POSTGRES_PASSWORD=""
+ POSTGRES_DB=""
+ POSTGRES_DB_TB =""
+ PGPORT= 

      
      
## 5. gitignore.js:
+ ./package-lock.json
+ ./package.json
+ .env
    
## 5. Server.js:
