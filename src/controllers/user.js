const db = require("../config/database");

exports.createUser = async (req, res) => {
  const { name, email, hashed_password, about, role, history } = req.body;
  try {
    const {
      rows,
    } = await db.query(
      "INSERT INTO users (name, email, hashed_password, about, role, history) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, email, hashed_password, about, role, history]
    );

    res.status(201).send({
      message: "Usuario Criado com Sucesso!!!",
      body: {
        user: { name, email, hashed_password, about, role, history },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.listAllUser = async (req, res) => {
    try {
      const response = await db.query("SELECT * FROM users ORDER BY id ASC");
      res.status(200).send(response.rows);
    } catch (error) {
      console.log(error);
    }
};

exports.findUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
      const response = await db.query("SELECT * FROM users WHERE id = $1", [
        userId,
      ]);
      res.status(200).send(response.rows);
    } catch (error) {
      console.log(error);
    }
  };
  
exports.updateUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, hashed_password, about, role, history } = req.body;
    try {
      const response = await db.query(
        "UPDATE users SET name = $1, email = $2 , hashed_password = $3 , about = $4 , role = $5 , history = $6 WHERE id = $7",
        [name, email, hashed_password, about, role, history, userId]
      );
  
      res.status(200).send({ message: "Usuário Atualizado com Sucesso!!!" });
    } catch (error) {
      console.log(error);
    }
  };

  exports.deleteUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
      await db.query("DELETE FROM users WHERE id = $1", [userId]);
  
      res
        .status(200)
        .send({ message: "Usuário Exluido com Sucesso!!!", userId });
    } catch (error) {
      console.log(error);
    }
  };
  