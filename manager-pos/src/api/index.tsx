import * as qs from 'query-string';

import { tryFetch, buildJsonRequest } from "./helpers";

const API = `http://localhost:3000`; // TODO: MOVE THIS TO AN ENV VAR

export const apiUrl = (endpoint: string): string => `${API}${endpoint}`;

export function Get<Res>(endpoint: string) {
  return tryFetch<Res>(apiUrl(endpoint));
};

export function GetQuery<Params, Res>(endpoint: string, query: Params) {
  return tryFetch<Res>(apiUrl(`${endpoint}?${qs.stringify(query)}`));
};

export function PostEmpty<Res>(endpoint: string) {
  return tryFetch<Res>(apiUrl(endpoint), { method: 'POST' });
};

export function PostJSON<Req, Res>(endpoint: string, body: Req) {
  return tryFetch<Res>(apiUrl(endpoint), buildJsonRequest('POST', body));
};

export function PutJSON<Req, Res>(endpoint: string, body: Req) {
  return tryFetch<Res>(apiUrl(endpoint), buildJsonRequest('PUT', body));
};

export function Delete<Res>(endpoint: string) {
  return tryFetch<Res>(apiUrl(endpoint), { method: 'DELETE' });
};

export default {
  Get,
  GetQuery,
  PostJSON,
  PostEmpty,
}
