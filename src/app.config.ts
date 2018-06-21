require('dotenv').config();

/**
 * Specifies the default port for the server.
 */
const DEFAULT_PORT: string = '9090';

/** Specifies the default host for the server. */
const DEFAULT_HOST: string = 'localhost';

/** Specifies the default protocol for the server. */
const DEFAULT_PROTOCOL: string = 'http';

/** Configuration options for the server. */
class ServerConfig {
    static get port(): string {
        return process.env.port || process.env.PORT || DEFAULT_PORT;
    }

    static get protocol(): string {
        return DEFAULT_PROTOCOL;
    }

    static get host(): string {
        return process.env.host || process.env.host || DEFAULT_HOST ;
    }

    static get serverUrl(): string {
        return `${ServerConfig.protocol.toString()}://${ServerConfig.host}:${ServerConfig.port}`;
    }

    static get clientId(): string {
        return process.env.MICROSOFT_APP_ID;
    }

    static get clientSecret(): string {
        return process.env.MICROSOFT_APP_PASSWORD;
    }
}

export { ServerConfig as config }; 