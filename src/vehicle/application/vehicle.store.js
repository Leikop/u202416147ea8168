import {VehicleApi} from "../infrastructure/vehicle-api.js";
import {VehicleAssembler} from "../infrastructure/vehicle-assembler.js";
import { defineStore } from 'pinia';
import { ref } from 'vue';

const vehicleApi = new VehicleApi();



export const useVehicleStore = defineStore('vehicles', () => {
    const vehicles = ref([]);
    const errors = ref([]);
    const vehiclesLoaded = ref(false);

    function fetchVehicles() {
        vehicleApi
            .getVehicles()
            .then((response) => {
                vehicles.value = VehicleAssembler.toEntitiesFromResponse(response);
                vehiclesLoaded.value = true;
            })
            .catch((error) => errors.value.push(error));
    }

    return {
        vehicles,
        errors,
        vehiclesLoaded,
        fetchVehicles,
    };
});
export default useVehicleStore;
