import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const showroomsPath = import.meta.env.VITE_SHOWROOMS_ENDPOINT_PATH;

export class VehicleApi {
    #http;
    constructor() {
        this.#http = axios.create({ baseURL: apiBaseUrl });
    }
    getVehicles() {
        return this.#http.get(showroomsPath);
    }
}
