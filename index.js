const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Menambah data baru
server.post('/comments', (req, res, next) => {
  req.body.id = Date.now(); // Tambahkan ID unik
  next();
});

// Menggunakan router dari JSON Server
server.use(router);

// Menjalankan server
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});


