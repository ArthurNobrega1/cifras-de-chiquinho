const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./database')
require('dotenv').config()
const port = process.env.PORT ? Number(process.env.PORT) : 3333

app.use(cors())
app.use(express.json())

app.get('/all', async (req, res) => {
    try {
        const musicas = await pool.query('SELECT * FROM musicas')
        res.status(200).json(musicas.rows)
    } catch(err) {
        console.error(err)
        res.status(500).send('Erro no servidor')
    }
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})