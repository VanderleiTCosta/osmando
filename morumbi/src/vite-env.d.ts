/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE44_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}