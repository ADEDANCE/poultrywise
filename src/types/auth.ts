export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    name: string;
    email: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}