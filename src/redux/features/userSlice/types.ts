export interface UserState extends User {
  isLogged: boolean;
}

export interface User {
  username: string;
  id: string;
  token: string;
}

export interface ProfileStructure extends Omit<User, "token"> {
  email: string;
  location?: string;
  bio?: string;
  image?: string;
  backupImage?: string;
  birthday?: string;
}
