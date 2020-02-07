import { API_SERVER_URL } from 'constants/app';

export enum SupportedHttpMethodType {
  get = 'GET',
  post = 'POST',
}

export type Request = {
  method: SupportedHttpMethodType;
  path: string;
  body?: string;
}

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function request(req: Request): Promise<Response> {
  const { method, path } = req;

  return fetch(`${API_SERVER_URL}${path}`, {
    method,
    headers: commonHeaders,
  });
}

export const isResponseStatusOk: ((response: Response) => boolean) = (response: Response) => response.status >= 200 && response.status < 300;
