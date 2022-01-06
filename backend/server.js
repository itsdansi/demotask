const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3001;

const bookList = [
  {
    id: 1,
    title: "Palpasa Cafe",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
  {
    id: 2,
    title: "Sushi",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
  {
    id: 3,
    title: "Saya",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
  {
    id: 4,
    title: "Karnali Blues",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
  {
    id: 5,
    title: "Half Girlfriend",
    body: "this book is written by chetan bhagat. ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
  {
    id: 6,
    title: "Three mistakes of my life",
    body: "This book is also written by famous indian writer chetan bhagat. ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    imageUrl: "https://www.pexels.com/search/paper/",
  },
];

app.get("/", (req, res) => {
  res.json(bookList);
});

app.get("/book/:id", (req, res) => {
  const book = bookList.find((book) => book.id === parseInt(req.params.id));
  res.json(book);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.options("*", cors());
