const db = require("../config/database");

exports.createStock = async (req, res) => {
  const {
    suplierid,
    suplierdesc,
    description,
    color,
    unity,
    amount,
    pricecost,
    pricesale,
    data,
    status
  } = req.body;
  const {
    rows,
  } = await db.query(
    "INSERT INTO stock ( suplierid , suplierdesc, description, color, unity , amount, pricecost, pricesale, data, status ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [ suplierid , suplierdesc, description, color, unity , amount, pricecost, pricesale, data, status ]
  );

  res.status(201).send({
    message: "Item Criado com Sucesso no Estoque !!!",
    body: {
      entry: {
        suplierid,
        suplierdesc,
        description, 
        color,
        unity,
        amount,
        pricecost,
        pricesale,
        data,
        status,
      },
    },
  });
};

exports.listAllStock = async (req, res) => {
  const response = await db.query("SELECT *  FROM stock ORDER BY id ASC");
  res.status(200).send(response.rows);
};

exports.findStockById = async (req, res) => {
  const stockId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM stock WHERE id = $1", [
    stockId,
  ]);
  res.status(200).send(response.rows[0]);
};

exports.updateStockById = async (req, res) => {
  const stockId = parseInt(req.params.id);
  const { suplierid , suplierdesc, description, color, unity , amount, pricecost, pricesale, data, status  } = req.body;

  const response = await db.query(
    "UPDATE stock SET name = $1, categoryId = $2, category = $3 , paid = $4 , date = $5 , amount = $6 , type = $7 , description = $8 WHERE id = $9",
    [suplierid , suplierdesc, description, color, unity , amount, pricecost, pricesale, data, status , stockId]
  );

  res.status(200).send({ message: "Item Atualizado com Sucesso no Estoque!!!" });
};

exports.deleteStockById = async (req, res) => {
  const stockId = parseInt(req.params.id);
  await db.query("DELETE FROM stock WHERE id = $1", [stockId]);

  res
    .status(200)
    .send({ message: "Item Exluido com Sucesso do Estoque !!!", stockId });
};
