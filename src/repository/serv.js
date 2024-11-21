// Cria uma tabela para armazenar os itens
app.get('/criar-tabela', (req, res) => {
    const query = `
      CREATE TABLE IF NOT EXISTS itens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255),
        preco DECIMAL(10, 2),
        forma_pagamento VARCHAR(10)
      );
    `;
    db.query(query, (err, resultado) => {
      if (err) {
        console.error('Erro ao criar tabela:', err);
        res.status(500).send({ mensagem: 'Erro ao criar tabela!' });
      } else {
        res.send({ mensagem: 'Tabela criada com sucesso!' });
      }
    });
  });
  
  // Insere um novo item na tabela
  app.post('/inserir-item', (req, res) => {
    const { nome, preco, forma_pagamento } = req.body;
    const query = `
      INSERT INTO itens (nome, preco, forma_pagamento)
      VALUES (?, ?, ?);
    `;
    db.query(query, [nome, preco, forma_pagamento], (err, resultado) => {
      if (err) {
        console.error('Erro ao inserir item:', err);
        res.status(500).send({ mensagem: 'Erro ao inserir item!' });
      } else {
        res.send({ mensagem: 'Item inserido com sucesso!' });
      }
    });
  });
  
  // Lista todos os itens da tabela
  app.get('/listar-itens', (req, res) => {
    const query = 'SELECT * FROM itens;';
    db.query(query, (err, resultado) => {
      if (err) {
        console.error('Erro ao listar itens:', err);
        res.status(500).send({ mensagem: 'Erro ao listar itens!' });
      } else {
        res.send(resultado);
      }
    });
  });
  
  // Atualiza um item na tabela
  app.put('/atualizar-item/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, forma_pagamento } = req.body;
    const query = `
      UPDATE itens
      SET nome = ?, preco = ?, forma_pagamento = ?
      WHERE id = ?;
    `;
    db.query(query, [nome, preco, forma_pagamento, id], (err, resultado) => {
      if (err) {
        console.error('Erro ao atualizar item:', err);
        res.status(500).send({ mensagem: 'Erro ao atualizar item!' });
      } else {
        res.send({ mensagem: 'Item atualizado com sucesso!' });
      }
    });
  });
  
  // Deleta um item na tabela
  app.delete('/deletar-item/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM itens WHERE id = ?;';
    db.query(query, [id], (err, resultado) => {
      if (err) {
        console.error('Erro ao deletar item:', err);
        res.status(500).send({ mensagem: 'Erro ao deletar item!' });
      } else {
        res.send({ mensagem: 'Item deletado com sucesso!' });
      }
    });
  });
  

  