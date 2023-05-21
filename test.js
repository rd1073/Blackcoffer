const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
/*
mongoose.connect('mongodb://0.0.0.0:27017/Claim', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Connected to database:', mongoose.connection.db.databaseName);

mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
      });
      



    app.get('/coll', async (req, res) => {
      try {
        const collection1 = mongoose.connection.collection('collection1');
        const documents = await collection1.findOne({});
        res.json(documents);
      } catch (error) {
        console.error('Error retrieving documents:', error);
        res.status(500).send('Error retrieving documents');
      }
    });

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });*/

mongoose.connect('mongodb://0.0.0.0:27017/Claim', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');})
 
  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
      });
  
   
  const cols = new mongoose.Schema({
    end_year:String,
    intensity:Number,
    sector:String,
    topic:String,
    insight:String
    
  });
  
  
  const Cols = mongoose.model('Cols', cols);
  
   
  /*
  // Read the JSON source file
  const jsonData = fs.readFileSync('test.json', 'utf8');
  const data = JSON.parse(jsonData);
  
  // Import the data into the collection
  Cols.insertMany(data)
    .then(() => {
      console.log('Data imported successfully');
      // Perform any additional operations if needed
    })
    .catch((error) => {
      console.error('Error importing data:', error);
    });*/
   
    app.get('/home', async (req, res) => {
      try {
        const docs = await Cols.find({});
        if (!docs) {
          console.log("nnothing to see here");
        } else {
          res.send(docs);
          console.log(docs)
          
        }
      } catch (err) {
        console.error(err);
       }
    });


    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
   
  
 