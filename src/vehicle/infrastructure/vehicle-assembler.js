import { Vehicle } from '../domain/vehicle.entity.js';

export class VehicleAssembler {
    static toEntityFromResource(resource) {
        return new Vehicle ({
            id: resource.id,
            name: resource.name,
            vehicleCategory: resource.vehicleCategory,
            maxCapacity: resource.maxCapacity,
        });
    }
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        const resources = response.data instanceof Array ? response.data : response.data['showroom-sections'];
        return resources.map((resource) => this.toEntityFromResource(resource));
    }
}
