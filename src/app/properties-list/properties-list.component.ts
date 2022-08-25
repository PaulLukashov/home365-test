import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Property } from 'Core/models';
import { PropertyService } from 'Core/services';
import { finalize, Subscription } from 'rxjs';
import { ModalComponent } from 'Shared/components/modal/modal.component';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  propertySub!: Subscription;
  planesMap = new Map<string, string>([
    ['On Demand', 'On-Demand'],
    ['oneRate', 'One-Rate'],
  ]);
  isLoading = false;
  properties!: Property[];
  displayedColumns: string[] = [
    'created',
    'property',
    'property_status',
    'plan',
    'owner',
    'owner_status',
    'tenant',
    'tenant_status',
  ];
  dataSource!: MatTableDataSource<Property>;

  constructor(
    private propertyService: PropertyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.isLoading = true;
    this.propertyService
      .getProperties()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.properties = res;
          this.dataSource = new MatTableDataSource<Property>(res);

          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.properties.forEach((prop) =>
              console.log(prop?.tenant?.tenantFullName)
            );
          }, 0);
        },
      });
  }

  openModal(title: string, info: string, status: string) {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: { title, info, status },
    });
  }
}
