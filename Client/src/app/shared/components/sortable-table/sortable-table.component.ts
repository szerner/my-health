import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.css']
})
export class SortableTableComponent implements OnInit {
  @Input('items') items;

  constructor() { }

  ngOnInit() {
  }

}
