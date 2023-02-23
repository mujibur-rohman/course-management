// or, if using CommonJS
const { faker } = require("@faker-js/faker/locale/id_ID");
// import { faker } from '@faker-js/faker';

function usersFaker(total) {
  const createUser = () => {
    return {
      name: faker.name.fullName(),
      phone: faker.phone.number(),
      address: faker.address.city(),
      profile_picture: faker.image.avatar(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  };

  const createUsers = (numUsers = total) => {
    return Array.from({ length: numUsers }, createUser);
  };

  let fakeUsers = createUsers(total);

  return fakeUsers;
}

module.exports = usersFaker;
