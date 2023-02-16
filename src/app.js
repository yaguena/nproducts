const express = require('express');
const Settings = require('./infra/settings');

const app = express();

app.listen(Settings.APP_PORT, (err) => {
  if (err) {
      console.log(err);
      process.exit(1);
  }
  console.log(`Server is running on ${Settings.APP_PORT}`);
});