import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyStatuses, TenantStatuses } from 'Core/constants';
import { Property } from 'Core/models';

@Component({
  selector: 'app-properties-list-filters',
  templateUrl: './properties-list-filters.component.html',
  styleUrls: ['./properties-list-filters.component.scss'],
})
export class PropertiesListFiltersComponent {
  @Input() tableData!: Property[];
  @Output() filteredTabeData = new EventEmitter<Property[]>();
  propertyStatuses = PropertyStatuses;
  tenantStatuses = TenantStatuses;
  filtersData = {
    occupiedStats: 'all',
    tenantStatus: 'all',
  };

  constructor() {}

  filterTable(value: string, filterName: string) {
    if (filterName === 'tenant') {
      this.filtersData.tenantStatus = value;
    }
    if (filterName === 'property') {
      this.filtersData.occupiedStats = value;
    }

    const filteredData = this.tableData.filter((value) => {
      return (
        (this.filtersData.occupiedStats !== 'all'
          ? this.filtersData.occupiedStats === this.propertyStatuses[0]
            ? value?.occupiedStats === this.propertyStatuses[1] ||
              value?.occupiedStats === this.propertyStatuses[2]
            : value?.occupiedStats === this.filtersData.occupiedStats
          : true) &&
        (this.filtersData.tenantStatus !== 'all'
          ? value?.tenant?.tenantStatus === this.filtersData.tenantStatus
          : true)
      );
    });

    this.filteredTabeData.next(filteredData);
  }
}
