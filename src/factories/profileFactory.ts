import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { flattenHeadersList } from "headers-polyfill";
import { ProfileStructure } from "../redux/features/userSlice/types";

const profileFactory = Factory.define<ProfileStructure>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(10),
  email: faker.internet.email(),
  backupImage: faker.internet.avatar(),
  image: faker.internet.avatar(),
  bio: faker.random.words(30),
  birthday: faker.date.birthdate().getTime().toString(),
  location: faker.address.cityName(),
}));

export const getRandomProfile = () => profileFactory.build();

export const getRandomProfileList = (number: number) =>
  profileFactory.buildList(number);
