export interface PropertiesResponce {
  properties: Property[];
}

export interface PropertyResponce {
  propertyId: string;
  createdOn: string;
  address: string;
  occupiedStats: string;
  owner: string;
  ownerStatus: string;
  tenant: Tenant;
  plan: string;
}

export interface TenantResponce {
  contactId: string;
  firstName: string;
  lastName: string;
  tenantStatus: string;
}

export class Property implements PropertyResponce {
  propertyId!: string;
  createdOn!: string;
  address!: string;
  occupiedStats!: string;
  owner!: string;
  ownerStatus!: string;
  tenant!: Tenant;
  plan!: string;

  constructor(data: PropertyResponce) {
    if (data) {
      Object.assign(this, data);
    }

    if (data.tenant) {
      this.tenant = new Tenant(data.tenant);
    }
  }
}

export class Tenant implements TenantResponce {
  contactId!: string;
  firstName!: string;
  lastName!: string;
  tenantStatus!: string;

  get tenantFullName() {
    return (
      (this.firstName ? this.firstName + ' ' : '') +
      (this.lastName ? this.lastName : '')
    );
  }

  constructor(data: TenantResponce) {
    Object.assign(this, data);
  }
}
