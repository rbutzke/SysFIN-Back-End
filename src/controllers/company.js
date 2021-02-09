const db = require("../config/database");

exports.createCompany = async (req, res) => {
  const { name, description } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      "INSERT INTO company (name, description) VALUES ($1, $2)",
      [name, description]
    );

    res.status(201).send({
      message: "Empresa Criada com Sucesso!",
      body: {
        company: { name, description },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.listAllCompany = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM company ORDER BY id ASC");
    res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
  }
};

exports.findCompanyById = async (req, res) => {
  const companyId = parseInt(req.params.id);
  try {
    
    const response = await db.query("SELECT * FROM company WHERE id = $1", [
      companyId,
    ]);
    //res.status(200).send(response.rows[0]);
    res.status(200).json(response.rows[0]);
    
  } catch (error) {
    console.log(error);
  }
};

exports.updateCompanyById = async (req, res) => {
  const companyId = parseInt(req.params.id);
  const { name, description } = req.body;
  try {
    const response = await db.query(
      "UPDATE company SET name = $1, description = $2 WHERE id = $3",
      [name, description, companyId]
    );

    res.status(200).send({ message: "Empresa Atualizada com Sucesso!!!" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCompanyById = async (req, res) => {
  const companyId = parseInt(req.params.id);
  try {
    await db.query("DELETE FROM company WHERE id = $1", [companyId]);

    res
      .status(200)
      .send({ message: "Empresa Exluida com Sucesso!!!", companyId });
  } catch (error) {
    console.log(error);
  }
};
