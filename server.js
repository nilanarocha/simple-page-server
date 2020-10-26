const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/article', (req, res) => {
  res.json({
    title: 'Lorem ispum',
    image:
      'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg',
    article: 'ahhahahhahhahahha',
  });
});
