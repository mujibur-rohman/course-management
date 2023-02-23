// or, if using CommonJS
const roleModel = require("../../database/" +
  process.env.DB_CONNECTION +
  "/models").role;
const permissionModel = require("../../database/" +
  process.env.DB_CONNECTION +
  "/models").permission;

function roles() {
  const role = (roleName) => {
    roleModel.findOrCreate({
      where: { name: roleName },
    });
  };
  const permission = (permissionName) => {
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

module.exports = roles;
