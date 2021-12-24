const User = require('./User');
// const Project = require('./Project');
// const Community = require('./Community');
// const Category = require("./Category");
// const Task = require("./Task");
// const Node = require("./Node");


//User belongs to many Community
//a user can have more than one community

//Community belongs to many User
//and a community has more than one user

//Project belongs to Community
//a project only has one community

//Community has many Project
//a community can have multiple projects

//Project belongs to many User
//a project can have more than one user work on it

//User belongs to many Project
//a user can work on more than one project

//Project has many Nodes
//project has multiple stages

//Node belongs to Project
//a node can only belong to one project

//Node has many Task
//Node has multiple tasks to complete

//Task belongs to Node
//each task only belond to one node

//Node belongs to many Category
//a node can include several types of work (categories)

//Category belongs to many Project
// a category(type of work) can belong to several projects

//Project has many Category
//a project can include several tyeps of work (categories)

//Category belongs to many Community
//more than one community can have the same type of work (category)

//community has many Category 
//a community can fall into many categories 


module.exports = {
    User,
    // Project,
    // Community
};