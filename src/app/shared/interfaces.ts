export interface User {
    email: String;
    password: String;
    returnSecureToken?: boolean;
}

export interface UsersAuth {
  name: String;
  apiKey: String;
  email: String;
}

export interface Environment {
  production: false;
  dataBaseUrl: String;
  ApiKey: String;
}

export interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
  planTime: number;
  createdDate: any;
  id?: string;
  timer?: string;
  spentTime?: String;
}

export interface FbCreateResponse {
  name: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
