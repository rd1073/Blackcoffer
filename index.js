const express = require('express');
const mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb://0.0.0.0:27017/Blackcoffer', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');})
 
  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
      });

  const Col = new mongoose.Schema({
        end_year: String,
        intensity: Number,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        start_year: String,
        impact: String,
        added: String,
        published: String,
        country: String,
        relevance: Number,
        pestle: String,
        source: String,
        title: String,
        likelihood: Number
      });
  
      const Collection1 = mongoose.model('Collection1', Col);


      app.get('/all', async (req, res) => {
        try {
          const docs = await Collection1.find({});
          if (!docs) {
            console.log("nnothing to see here");
          } else {
            res.send(docs);
            
            
          }
        } catch (err) {
          
         }
      });
     

  app.get('/topic', async (req, res) => {
    try {
      const docs = await Collection1.find({},"topic insight title");
      if (!docs) {
        console.log("nnothing to see here");
      } else {
        res.send(docs);
        
        
      }
    } catch (err) {
      console.error(err);
     }
  });

  app.get('/sector', async (req, res) => {
    try {
      const docs = await Collection1.find({},"sector");
      if (!docs) {
        console.log("nnothing to see here");
      } else {
        res.send(docs);
        
        
      }
    } catch (err) {
      console.error(err);
     }
  });

  app.get('/region', async (req, res) => {
    try {
      const docs = await Collection1.find({},"region country likelihood");
      if (!docs) {
        console.log("nnothing to see here");
      } else {
        res.json(docs);
        
        
      }
    } catch (err) {
      console.error(err);
     }
  });

  app.get('/pest', async (req, res) => {
    try {
      const docs = await Collection1.find({},"pestle source");
      if (!docs) {
        console.log("nnothing to see here");
      } else {
        res.send(docs);
        
        
      }
    } catch (err) {
      console.error(err);
     }
  });

 
  app.post('/add', async (req, res) => {
    try {
      const newPost = req.body;
      const newDoc = await Collection1.create(newPost);
      res.json(newDoc);
      console.log(newDoc);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.put('/up/:id', async (req, res) => {
    try {
      const documentId = req.params.id;
      const newData = req.body;
      const updatedDocument = await Collection1.findByIdAndUpdate(
        documentId,
        newData,
        { new: true }
      );
  
      if (updatedDocument) {
        res.json(updatedDocument);
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
   

  app.delete('/del/:id', async (req, res) => {
    try {
      const documentId = req.params.id;
      const deletedDocument = await Collection1.findByIdAndDelete(documentId);
  
      if (deletedDocument) {
        res.json({ message: 'Document deleted successfully' });
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  
  
  app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
   
  
 
