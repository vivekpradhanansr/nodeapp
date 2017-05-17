var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

function searchTodos(res, req) {
    Todo.find({'tags': {$regex :req }},function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            console.log(err);
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/content', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });


 // api ---------------------------------------------------------------------
    // serch all todos
    app.get('/api/content/search/:word', function (req, res) {
        // use mongoose to get all todos in the database
        searchTodos(res, req.params.word);
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};