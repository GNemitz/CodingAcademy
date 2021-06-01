const Joi = require('joi');  //returns a class called Joi
const express = require('express');
const app = express();   //app object with lots of useful options: get, post, put, etc

app.use(express.json());  //retrieves middle ware

//no if statements in this structure for easier expandability

const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'},
];


app.get('/', (req, res) => {   //define route and callback function/route handler
  res.send('Hello World!!!');
});


app.get('/api/courses', (req, res) => {
  res.send(courses);
});


app.post('/api/courses', (req, res) => {
  
  const { error } = validateCourse(req.body);    //object destructuring - want error property
  if (error) return res.status(400).send(error.details[0].message);  //400  bad request
  
  const course = {
    id: courses.length + 1,    //assigning id on server
    name: req.body.name
  };
  courses.push(course);
  res.send(course);  
});

app.put('/api/courses/:id', (req, res) => {
  //look up course
  //if not existing, return 404 not found 
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');   //404 not found 
  
  //validate
  //if invalid then 400 bad request
  //const result = validateCourse(req.body);   //before destructring
  const { error } = validateCourse(req.body);    //object destructuring - want error property
  if (error) return res.status(400).send(error.details[0].message);  //400  bad request

  //all good - update course
  //return updated course to client
  course.name = req.body.name;
  res.send(course);

});

app.delete ('/api/courses/:id', (req, res) => {
  //look up course
  //not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');   //404 not found 
  //delete
  const index = courses.indexOf(course);
  courses.splice(index,1);
  //return the same course
  res.send(course);
});


function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
};

// /api/courses/1 - 1 is id of course
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found');   //404 not found 
  res.send(course);
});


//PORT 
const port = process.env.PORT || 3000;     //process is global object, env is environment, env variable is PORT - if set use port else use 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
