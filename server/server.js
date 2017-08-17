const express = require('express');
const app = express();

app.use(express.static('../index.html'));

app.listen(process.env.PORT || 8080, () => {
  console.log("connected to server");
});