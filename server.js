/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 03/01/2021
 * Author: Roberto Butzke Junior
 */
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Ativo na porta: ${port}`);
});