const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

let posts = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Home - View all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// New Post Form
app.get('/posts/new', (req, res) => {
    res.render('new');
});

// Create Post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: Date.now(), title, content });
    res.redirect('/');
});

// Edit Post Form
app.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.render('edit', { post });
    } else {
        res.redirect('/');
    }
});

// Update Post
app.put('/posts/:id', (req, res) => {
    const { title, content } = req.body;
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
        post.title = title;
        post.content = content;
    }
    res.redirect('/');
});

// Delete Post
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
