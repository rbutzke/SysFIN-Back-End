const db = require("../config/database");

exports.createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      "INSERT INTO category (name, description) VALUES ($1, $2)",
      [name, description]
    );

    res.status(201).send({
      message: "Categoria Criada com Sucesso!",
      body: {
        category: { name, description },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.listAllCategory = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM category ORDER BY id ASC");
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.findCategoryById = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  try {
    
    const response = await db.query("SELECT * FROM category WHERE id = $1", [
      categoryId,
    ]);
    //res.status(200).send(response.rows[0]);
    res.status(200).json(response.rows[0]);
    
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategoryById = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const { name, description } = req.body;
  try {
    const response = await db.query(
      "UPDATE category SET name = $1, description = $2 WHERE id = $3",
      [name, description, categoryId]
    );

    res.status(200).send({ message: "Categoria Atualizada com Sucesso!!!" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategoryById = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  try {
    await db.query("DELETE FROM category WHERE id = $1", [categoryId]);

    res
      .status(200)
      .send({ message: "Categoria Exluida com Sucesso!!!", categoryId });
  } catch (error) {
    console.log(error);
  }
};
