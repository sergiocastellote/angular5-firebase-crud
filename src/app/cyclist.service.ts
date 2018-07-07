import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cyclist } from './cyclist';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ReturnStatement } from '@angular/compiler';



@Injectable()
export class CyclistService {

  private cyclistCollection: AngularFirestoreCollection<Cyclist>;
  private cyclistDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  getCyclist(): Observable<any[]> {
    this.cyclistCollection = this.db.collection<Cyclist>('cyclist');
    return this.cyclistCollection.snapshotChanges();
  }

  getOneCyclist(id): Observable<Cyclist> {
    this.cyclistDoc = this.db.collection("cyclist").doc(id);
    return this.cyclistDoc.valueChanges();
  }

  addCyclist(cyclist: Cyclist) {
    return this.cyclistCollection.add(cyclist);
  }

  updateCyclist(id, cyclist) {
    return this.cyclistCollection.doc(id).update(cyclist);
  }

  deleteCyclist(cyclist) {
    this.cyclistCollection.doc(cyclist.id).delete();
  }

}
