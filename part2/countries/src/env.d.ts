/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COUNTRIES_API: string;
    readonly VITE_SPECIFIC_COUNTRY: string;
    readonly VITE_WEATHER_API_KEY: string;
    readonly VITE_WEATHER_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}