import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.scss']
})
export class TableStructureComponent implements OnInit {
  @Input() busData;
  
  constructor() { }

  ngOnInit() {
  }

  calculateStatus(deviation) {
    if( deviation > 220 )
      return 'Late';
    else if( deviation <= 220 && deviation > 0 )
      return 'On time';
    else if( deviation < 0 )
      return 'Early'
    else if( deviation === null )
      return 'Unknown';
  }

}
