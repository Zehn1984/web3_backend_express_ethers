import app from './src/app.js'
import {PORT} from './secrets.js'

const port = PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})