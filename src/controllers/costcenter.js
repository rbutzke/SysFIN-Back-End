const db = require("../config/database");

exports.createCostCenter = async (req, res) => {
  const { name, description } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      "INSERT INTO costcenter (name, description) VALUES ($1, $2)",
      [name, description]
    );

    res.status(201).send({
      message: "Centro de Custo Criado com Sucesso!",
      body: {
        costcenter: { name, description },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.listAllCostCenter = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM costcenter ORDER BY id ASC");
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.findCostCenterById = async (req, res) => {
  const costCenterId = parseInt(req.params.id);
  try {
    const response = await db.query("SELECT * FROM costcenter WHERE id = $1", [
      costCenterId,
    ]);
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.updateCostCenterById = async (req, res) => {
    const costCenterId = parseInt(req.params.id);
    const { name, description } = req.body;
    try {
      const response = await db.query(
        "UPDATE costcenter SET name = $1, description = $2 WHERE id = $3",
        [name, description, costCenterId]
      );
  
      res.status(200).send({ message: "Centro de Custo Atualizado com Sucesso!!!" });
    } catch (error) {
      console.log(error);
    }
  };

  exports.deleteCostCenterById = async (req, res) => {
    const costCenterId = parseInt(req.params.id);
    try {
      await db.query("DELETE FROM costcenter WHERE id = $1", [costCenterId]);
  
      res
        .status(200)
        .send({ message: "Centro de Custo Exluido com Sucesso!!!", costCenterId });
    } catch (error) {
      console.log(error);
    }
  };