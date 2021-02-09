const db = require("../config/database");

exports.createEntry = async (req, res) => {
  const {
    name,
    categoryId,
    category,
    paid,
    date,
    amount,
    type,
    description,
  } = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO entry ( name , categoryid, category, paid, date , amount, type, description ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [name, category.id, category.name, paid, date, amount, type, description]
  );

  res.status(201).send({
    message: "Lançamento Criado com Sucesso!",
    body: {
      entry: {
        name,
        categoryId: category.id,
        category: category.name,
        paid,
        date,
        amount,
        type,
        description,
      },
    },
  });
};

exports.listAllEntry = async (req, res) => {
  const response = await db.query("SELECT id,name,categoryid,category,paid,date , amount, type, description  FROM entry ORDER BY id ASC");
  res.status(200).send(response.rows);
};

exports.findEntryById = async (req, res) => {
  const entryId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM entry WHERE id = $1", [
    entryId,
  ]);
  res.status(200).send(response.rows[0]);
};

exports.updateEntryById = async (req, res) => {
  const entryId = parseInt(req.params.id);
  const { name, categoryid, category, paid, date, amount, type, description } = req.body;

  const response = await db.query(
    "UPDATE entry SET name = $1, categoryId = $2, category = $3 , paid = $4 , date = $5 , amount = $6 , type = $7 , description = $8 WHERE id = $9",
    [name, category.id, category.name, paid, date, amount, type, description, entryId]
  );

  res.status(200).send({ message: "Lançamento Atualizado com Sucesso!!!" });
};

exports.deleteEntryById = async (req, res) => {
  const entryId = parseInt(req.params.id);
  await db.query("DELETE FROM entry WHERE id = $1", [entryId]);

  res
    .status(200)
    .send({ message: "Lançamento Exluido com Sucesso!!!", entryId });
};
