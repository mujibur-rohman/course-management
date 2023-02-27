// or, if using CommonJS
const { faker } = require("@faker-js/faker/locale/id_ID");
const { v4: uuidv4 } = require("uuid");
// import { faker } from '@faker-js/faker';

function usersFaker(total) {
  const createUser = () => {
    return {
      id: uuidv4(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "password", //faker.internet.password(),
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
