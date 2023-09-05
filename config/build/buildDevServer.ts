import { BuildOptions } from "./types/config";
import type { Configuration as DevServer} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServer {
    return {
        port: options.port,
        open: true
    }
}