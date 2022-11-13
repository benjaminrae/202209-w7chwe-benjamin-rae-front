import { JwtPayload } from "jwt-decode";

export interface CustomTokenPayload extends JwtPayload {
  username: string;
  id: string;
}

export interface AxiosErrorResponseBody {
  error: string;
}
