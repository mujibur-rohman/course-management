module.exports = (app, config) => {
  const port = config.port
  const startServer = () => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }
  
  return {
    startServer    
  }
}
