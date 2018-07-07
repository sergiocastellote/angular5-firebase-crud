import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cyclist-form',
  templateUrl: './cyclist-form.component.html'
})
export class CyclistFormComponent implements OnInit {
  
  cyclist = new Cyclist();
  create: boolean;
  detail: string;

  constructor(private cyclistService: CyclistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.url);
    //check if is create or edit
    this.create = this.router.url.includes('form');
    this.detail = this.route.snapshot.paramMap.get('detail');
    if (!this.create) {
      this.getOneCyclist();
    }
  }

  createCyclist(cyclist) {
    let obj = {
      name: cyclist.name,
      surname: cyclist.surname,
      info: cyclist.info
    }
    this.cyclistService.addCyclist(obj).then(cyclist => {
      this.cyclist = new Cyclist();
    }, error => console.log('error'))
  }

  updateCyclist(cyclist) {
    let id = this.route.snapshot.paramMap.get('id');
    this.cyclistService.updateCyclist(id, cyclist).then(cyclist => {
      this.router.navigateByUrl('/list');
    }, error => {
      console.log(error);
    })

  }

  getOneCyclist(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cyclistService.getOneCyclist(id).subscribe(cyclist => {
      this.cyclist = cyclist;
    });
  }

}