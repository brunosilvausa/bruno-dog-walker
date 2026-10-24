import "server-only";
import pino, { type DestinationStream } from "pino";
import { getLogLevel } from "@/lib/env";

export function createLogger(destination?: DestinationStream) {
  const options = {
    level: getLogLevel(),
    redact: {
      paths: [
        "password", "token", "secret", "authorization", "cookie",
        "*.password", "*.token", "*.secret", "*.authorization", "*.cookie",
        "req.headers.authorization", "req.headers.cookie", 'req.headers["x-api-key"]',
      ],
      remove: true,
    },
  };
  return destination ? pino(options, destination) : pino(options);
}

export const logger = createLogger();
