import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/components/models/Filter';
import { FilterService } from 'src/app/components/services/filter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  filter$: Observable<Filter>;

  constructor(private filterService: FilterService) {
    this.filter$ = this.filterService.filter$;
  }

  ngOnInit(): void {
  }

  createBracket(): void {
    this.filterService.addBracket();
  }

}
