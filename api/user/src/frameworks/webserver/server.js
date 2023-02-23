const port = process.env.APP_PORT || 5000;

const server = (router) => {
  router.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
  });

  return router;
};

module.exports = server;
