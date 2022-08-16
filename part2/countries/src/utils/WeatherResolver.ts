export interface Location {
    latitude: number;
    longitude: number;
}

export class WeatherReport {
    #_temperature: number;
    #_windSpeed: number;
    #_icon: string;
    #_description: string;

    /**
     * Creates a WeatherReport
     * 
     * @param temperature The current temperature in Kelvin
     * @param windSpeed The current wind speed in m/s
     */
    constructor(temperature: number, windSpeed: number, icon: string, description: string,) {
        this.#_temperature = temperature;
        this.#_windSpeed = windSpeed;
        this.#_icon = icon;
        this.#_description = description;
    }

    static copyFrom(weatherReport: WeatherReport): WeatherReport {
        return new WeatherReport(weatherReport.temperature + 273.15, weatherReport.windSpeed, weatherReport.iconName, weatherReport.description);
    }

    /**
     * Returns the temperature in Celcius
     */
    public get temperature(): number {
        return this.#_temperature - 273.15;
    }

    /**
     * Returns the wind speed in m/s
     */
    public get windSpeed(): number {
        return this.#_windSpeed;
    }

    /**
     * URL to an icon representing the current weather conditions.
     */
    public get icon(): string {
        return `http://openweathermap.org/img/wn/${this.#_icon}@2x.png`;
    }

    public get iconName(): string {
        return this.#_icon;
    }

    /**
     * Short description on the current weather conditions.
     */
    public get description(): string {
        return this.#_description;
    }
}

interface WeatherResponse {
    main: {
        temp: number;
    };

    wind: {
        speed: number;
    }

    weather: Array<{
        icon: string;
        main: string;
    }>
}

const WeatherResolver = async ({ latitude, longitude }: Location) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = import.meta.env.VITE_WEATHER_API
        .replace("<lat>", latitude.toString())
        .replace("<lon>", longitude.toString())
        .replace("<apiKey>", apiKey);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }

    const weatherResponse = await response.json() as unknown as WeatherResponse;

    return new WeatherReport(weatherResponse.main.temp, weatherResponse.wind.speed, weatherResponse.weather[0].icon, weatherResponse.weather[0].main);
};

export default WeatherResolver;