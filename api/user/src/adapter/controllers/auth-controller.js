const authController = (userRepo, roleRepo, permissionRepo) => {
  const login = (req, res) => {
    assignToProfile(
      { username: req.username },
      userRepo,
      roleRepo,
      permissionRepo
    );
  };

  return {
    login,
  };
};

module.exports = authController;
