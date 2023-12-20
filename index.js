// Assuming you have installed the required packages: express, mongoose, and body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Project = require('./models/Project');
const cors = require('cors')

const app = express();
app.use(cors())
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://arsal0344:03444800061@cluster0.u6h8hwf.mongodb.net/asadsaddm?retryWrites=true&w=majority');

app.use(bodyParser.json());


// Get all active projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
