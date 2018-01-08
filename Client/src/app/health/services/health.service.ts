import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BodyWeight } from '@models/body-weight';
import { AuthService } from '@services/auth.service';
import { Circulation } from '@models/circulation';
import { Measurement } from '@models/measurement';
import { BMI } from '@models/bmi';


@Injectable()
export class HealthService {
   private readonly healthEndpoint = '/api/healthdata';
   private readonly weightEndpoint = this.healthEndpoint + "/bodyweights";
   private readonly circulationEndpoint = this.healthEndpoint + "/circulations";

   constructor(
      private http: HttpClient,
      private auth: AuthService
   ) { }

   private get currentUserId() {
      return this.auth.currentUserId;
   }

   private getNewMeasurement(m: Measurement, copyFrom?: Measurement): Measurement {
      if (copyFrom != null) {
         for (var p in copyFrom) m[p] = copyFrom[p];
      }
      delete m.id;
      m.userId = this.currentUserId;
      m.time = new Date();

      return m;
   }

   getBMI(weight: number, height: number) {
      return new BMI(weight, height);
   }


   getNewCirculation(copyFrom?: Circulation): Circulation {
      let o = new Circulation();
      return this.getNewMeasurement(o, copyFrom) as Circulation;
   }
   getNewBodyweight(copyFrom?: BodyWeight): BodyWeight {
      let o = new BodyWeight();
      return this.getNewMeasurement(o, copyFrom) as BodyWeight;
   }

   addBodyWeight(weight: BodyWeight): Observable<BodyWeight> {
      return this.http.post<BodyWeight>(this.weightEndpoint, weight);
   }
   getBodyWeights(): Observable<BodyWeight[]> {
      return this.http.get<BodyWeight[]>(this.weightEndpoint + '/' + this.currentUserId);
   }
   getLastBodyWeight(): Observable<BodyWeight> {
      return this.http.get<BodyWeight>(this.weightEndpoint + '/' + this.currentUserId + '/latest')
         .catch(err => Observable.of(new BodyWeight()));
   }
   deleteBodyWeight(weightId: number) {
      return this.http.delete(this.weightEndpoint + '/' + this.currentUserId + '/' + weightId);
   }

   addCirculation(circulation: Circulation): Observable<Circulation> {
      return this.http.post<Circulation>(this.circulationEndpoint, circulation);
   }
   getCirculations(): Observable<Circulation[]> {
      return this.http.get<Circulation[]>(this.circulationEndpoint + '/' + this.currentUserId);
   }
   getLastCirculation(): Observable<Circulation> {
      return this.http.get<Circulation>(this.circulationEndpoint + '/' + this.currentUserId + '/latest')
         .catch(err => Observable.of(new Circulation())); //return empty Object if no data found
   }
   deleteCirculation(circulationId: number) {
      return this.http.delete(this.circulationEndpoint + '/' + this.currentUserId + '/' + circulationId);
   }

}
