// or, if using CommonJS
const roleModel = require("../../database/postgres/models/role");
const permissionModel = require("../../database/postgres/models/permission");
const { Sequelize } = require("sequelize");

function roleHasPermissions() {
  const role = (roleName) => {
    const role = roleModel(sequilize);
    role.findOrCreate({
      where: { name: roleName },
    });
  };
  const permission = (permissionName) => {
    const permission = permissionModel(sequilize);
    permissionModel.findOrCreate({
      where: { name: permissionName },
    });
  };
  return [
    {
      roleId: role("Admin").id,
      permissionId: permission("Manage All Course").id,
    },
    {
      roleId: role("Admin").id,
      permissionId: permission("View All Course").id,
    },
    {
      roleId: role("Pengajar").id,
      permissionId: permission("Manage All Course").id,
    },
    {
      roleId: role("Siswa").id,
      permissionId: permission("Manage All Course").id,
    },
  ];
}

module.exports = roleHasPermissions;
