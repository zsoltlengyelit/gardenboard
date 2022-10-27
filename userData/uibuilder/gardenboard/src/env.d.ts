/// <reference types="vite/client" />
declare global {
    interface ImportMetaEnv extends Readonly<Record<string, string>> {
        readonly BASE_URL: string;
    }

    export interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}
