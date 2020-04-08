const {
  Pool
} = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/old', (req, res) => res.render('pages/old-index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT name, txt, cat, src, img FROM quote q JOIN author_quote aq ON aq.quote_id = q.id JOIN author a ON a.id = aq.author_id JOIN quote_category qc ON q.id = qc.quote_id JOIN category c ON c.id = qc.category_id');
      const results = {
        'results': (result) ? result.rows : null
      };
      res.render('pages/db', results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/detail', async (req, res) => {
    try {
      const cli = await pool.connect()
      const id = url.parse(req.url, true).query;
      const result = await cli.query('SELECT * FROM quote');
      const results = {
        'results': (result) ? result.rows : null
      };
      res.render('pages/detail', results);
      cli.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  //url.parse(req.url,true).query