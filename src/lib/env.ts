import "server-only";
import { logLevelSchema, parseEnv } from "@/lib/env-schema";

export function getLogLevel() {
  return parseEnv("LOG_LEVEL", process.env.LOG_LEVEL, logLevelSchema);
}
