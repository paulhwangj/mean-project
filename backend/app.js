const express = require('express');
const bodyParser = require('body-parser');

// creates an express app, express is really just a big chain of middleware
const app = express();

// no paths => for all incoming requests
app.use(bodyParser.json());

// no path because we want this to work for all incoming requests
app.use((req, res, next) => {

  // determines what domains are able to access our resources
  // first arg: header key, sec arg: value for the header key
  res.setHeader('Access-Control-Allow-Origin', '*'); // no matter what domain the app that is sending the request is running on
                                                     // we want it to access our backends resources

  // restrict access to our backend resources to requests that have a certain set of headers
  // i.e: the incoming requests may have these extra headers,
  //      if req has header not defined here, access is blocked
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  // controls which HTTP words may be used to send requests
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS' // should allow OPTIONS as it's implicitly sent by the browser
  );

  next();
});

// triggered for incoming post requests
app.post('/api/posts', (req, res, next) => {
  const post = req.body;  // .body allowed via body-parser we added
  console.log(post);

  // 201 means everything ok, new resource made
  // .json() sends back json data
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: '1',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '2',
      title: 'Second server-side post',
      content: 'This is coming from the server! (again)'
    }
  ];

  // returns data in json format
  return res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
