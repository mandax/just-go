const SUCCESS_STATUS = [200, 201, 203];

export interface ErrorMessage {
  status: number,
  error: string
}

const sendError = async (response: Response): Promise<ErrorMessage> => ({
  status: response.status,
  error: await response.text()
});

export function buildJsonRequest<Body>(method: string, body: Body) {
  return {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export async function tryFetch<Res>(
  endpoint: string, 
  config?: RequestInit
): Promise<Res | ErrorMessage> {
  
  const response = await fetch(new Request(endpoint, config));

  if (SUCCESS_STATUS.includes(response.status)) {
    return response.json();
  }
  return sendError(response);
};