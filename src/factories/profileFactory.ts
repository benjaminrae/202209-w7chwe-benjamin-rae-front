import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { ProfileStructure } from "../redux/features/profilesSlice/types";

const profileFactory = Factory.define<ProfileStructure>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(10),
  email: faker.internet.email(),
  backupImage: faker.internet.avatar(),
  image: faker.internet.avatar(),
  bio: faker.random.words(30),
  birthday: faker.date.birthdate().toISOString(),
  location: faker.address.cityName(),
}));

export const getRandomProfile = () => profileFactory.build();

export const getRandomProfileList = (number: number) =>
  profileFactory.buildList(number);
