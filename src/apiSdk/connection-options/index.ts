import axios from 'axios';
import queryString from 'query-string';
import { ConnectionOptionInterface, ConnectionOptionGetQueryInterface } from 'interfaces/connection-option';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConnectionOptions = async (
  query?: ConnectionOptionGetQueryInterface,
): Promise<PaginatedInterface<ConnectionOptionInterface>> => {
  const response = await axios.get('/api/connection-options', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createConnectionOption = async (connectionOption: ConnectionOptionInterface) => {
  const response = await axios.post('/api/connection-options', connectionOption);
  return response.data;
};

export const updateConnectionOptionById = async (id: string, connectionOption: ConnectionOptionInterface) => {
  const response = await axios.put(`/api/connection-options/${id}`, connectionOption);
  return response.data;
};

export const getConnectionOptionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/connection-options/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConnectionOptionById = async (id: string) => {
  const response = await axios.delete(`/api/connection-options/${id}`);
  return response.data;
};
