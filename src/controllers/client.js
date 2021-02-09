const db = require("../config/database");

exports.createClient = async (req, res) => {
  const { name, description } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      "INSERT INTO client (name, description) VALUES ($1, $2)",
      [name, description]
    );

    res.status(201).send({
      message: "Categoria Criada com Sucesso!",
      body: {
        client: { name, description },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.listAllClient = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM client ORDER BY id ASC");
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.findClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  try {
    
    const response = await db.query("SELECT * FROM client WHERE id = $1", [
      clientId,
    ]);
    //res.status(200).send(response.rows[0]);
    res.status(200).json(response.rows[0]);
    
  } catch (error) {
    console.log(error);
  }
};

exports.updateClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  const { name, description } = req.body;
  try {
    const response = await db.query(
      "UPDATE client SET name = $1, description = $2 WHERE id = $3",
      [name, description, clientId]
    );

    res.status(200).send({ message: "Categoria Atualizada com Sucesso!!!" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteClientById = async (req, res) => {
  const clientId = parseInt(req.params.id);
  try {
    await db.query("DELETE FROM client WHERE id = $1", [clientId]);

    res
      .status(200)
      .send({ message: "Categoria Exluida com Sucesso!!!", clientId });
  } catch (error) {
    console.log(error);
  }
};
