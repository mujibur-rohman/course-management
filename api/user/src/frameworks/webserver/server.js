const port = process.env.APP_PORT || 5000;

const server = (app) => {
  app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
  });

  return app;
};

module.exports = server;
