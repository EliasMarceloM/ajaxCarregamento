const express = require('express')
const app = express()
const port = process.env.PORT


app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html')
})
app.get('/arquivo.json', (req, res) => {
  res.send(
    
    '{"111"}'
    )
})

app.listen(port || 3000, () => {
  return console.log(`servidor rodando`)
})
