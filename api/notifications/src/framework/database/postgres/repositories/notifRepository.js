module.exports = (sequelize) => {
  const findAll = () => {
    console.log(sequelize)
  }

  return {
    findAll,
  }
}
