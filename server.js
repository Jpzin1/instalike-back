import express from 'express';

const posts = [
    {
      id: 1,
      descricao: "Gato fofinho",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 2,
      descricao: "Gato fofo dormindo",
      imagem: "https://placekitten.com/400/300",
    },
    {
      id: 3,
      descricao: "Paisagem montanhosa",
      imagem: "https://source.unsplash.com/random/400x300/?mountains",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});