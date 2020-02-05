import { API_SERVER_URL } from 'constants/app';

export enum SupportedHttpMethodType {
  get = 'GET',
}

export type Request = {
  method: SupportedHttpMethodType,
  path: string,
}

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export function request(request: Request): Promise<Response> {
  const { method, path } = request;

  return fetch(`${API_SERVER_URL}${path}`, {
    method,
    headers: commonHeaders,
  });
}

export const isResponseStatusOk = (response: Response) => {
  return response.status >= 200 && response.status < 300;
}