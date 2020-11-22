const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const MAXID = Math.pow(10, 4);

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(express.static("build"));
app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const findPerson = (type, value) => {
  const person = phonebook.find((p) => p[type] === value);
  return person;
};

app.get("/api/persons", (req, res) => {
  res.json(phonebook);
});

app.get("/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${phonebook.length} people</p>
<p>${new Date()}</p>
    `
  );
});

app.get("/api/persons/:id", (req, res) => {
  const person = findPerson("id", Number(req.params.id));

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = findPerson("id", id);

  if (person) {
    phonebook = phonebook.filter((p) => p.id !== id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

app.post("/api/persons", (req, res) => {
  const person = req.body;
  if (!person.name) {
    res.status(400).send({ error: "you must provide name" });
    return;
  }
  if (!person.number) {
    res.status(400).send({ error: "you must provide number" });
    return;
  }
  if (findPerson("name", person.name)) {
    res.status(400).send({ error: "name must be unique" });
    return;
  }
  person.id = Math.floor(Math.random() * Math.floor(MAXID));

  phonebook = phonebook.concat(person);
  res.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
