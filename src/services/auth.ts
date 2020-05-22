import axios, { AxiosResponse } from "axios";

type LoginResponse = AxiosResponse<{
  token: string;
}>;

export const login = async (
  email: String,
  password: String
): Promise<LoginResponse> => {
  const response: LoginResponse = await axios.post(
    "https://reqres.in/api/login",
    { email, password }
  );

  console.log("response", response);

  return response;
};
