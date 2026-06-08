const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = Number(process.env.PORT) || 3000;

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

app.get('/', (_req, res) => {
  res.json({ name: 'Layali Beauty API', status: 'running' });
});

app.get('/health', async (_req, res) => {
  if (!pool) {
    return res.status(503).json({ status: 'error', database: 'not_configured' });
  }

  try {
    await pool.query('SELECT 1');
    return res.json({ status: 'ok', database: 'connected' });
  } catch {
    return res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Layali Beauty API listening on port ${port}`);
});
