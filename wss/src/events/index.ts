interface Error {
  error: string;
  errorDetails?: string;
}

interface Success<T> {
  data: T;
}

export type Response<T> = Error | Success<T>;

export interface ServerEvents {
  "example:read": (arg: string) => void;
}

export interface ClientEvents {
  "example:list": (callback: (res: Response<string>) => void) => void;
  "example:response": (arg: string) => void;
  "test:time": (arg: string) => void;
}
