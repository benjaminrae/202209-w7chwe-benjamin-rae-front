import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { User } from "../redux/features/userSlice/types";

const userFactory = Factory.define<User>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(10),
  email: faker.internet.email(),
  token: faker.random.alphaNumeric(10),
}));

export const getRandomUser = () => userFactory.build();
