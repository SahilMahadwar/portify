import dotenv from "dotenv";
import workspacesRoot from "find-yarn-workspace-root";

const rootDirectory = workspacesRoot();

export const workspaceRoot = rootDirectory;

export function loadEnv() {
  return dotenv.config({ path: `${rootDirectory}/.env` });
}
