import { Observable } from 'rxjs';
import { element } from 'protractor';
import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html'
})
export class CyclistListComponent implements OnInit {

  listCyclist: Observable<Cyclist[]>;
  listCyclistFiltered: Array<Cyclist>;
  showListFiltered: boolean;
  name: string;
  
  constructor(private cyclistService: CyclistService, private router: Router) { }

  ngOnInit() {
    this.getCyclist();
  }

  getCyclist(): void {
    this.listCyclist = this.cyclistService.getCyclist().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Cyclist;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  searchCyclist(name): void {
      this.showListFiltered = true;
  }

  deleteCyclist(cyclist: Cyclist) {
    this.cyclistService.deleteCyclist(cyclist)
  }

  goToDetail(cyclist: Cyclist): void {
    this.router.navigate(['/detail/' + cyclist.id, {detail: true}])
    // this.router.navigateByUrl(['/detail/' + cyclist.id, {test: 'test'}]);
  }
  updateCyclist(cyclist: Cyclist): void {
    this.router.navigateByUrl('/detail/' + cyclist.id);
  }

  cleanSearch(): void {
    this.getCyclist();
    this.showListFiltered = false;
  }




}


