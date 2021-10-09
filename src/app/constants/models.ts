export interface IAuthor {
  name: string;
  id: string;
}

export interface ICourse {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  successful: boolean;
  result: string;
  user: {
    email: string;
    name: string;
  };
}
