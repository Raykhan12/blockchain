const { spawn } = require("child_process");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const createCertificado = spawn("create-certificate-template", ["-c", "cert-tools/conf.ini"]);
  createCertificado.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });
  createCertificado.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });
  createCertificado.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });
  createCertificado.on("close", code => {
    console.log(`child process exited with code ${code}`);
  });
  res.send('Hello World! now is running create')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})