// or, if using CommonJS
function roles() {
  return [
    {
      name: "Admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pengajar",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Siswa",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

module.exports = roles;
