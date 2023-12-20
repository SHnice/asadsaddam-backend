const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    project_image: String,
    website_link: String,
    project_link: String
  });


module.exports = mongoose.model('Project', projectSchema);