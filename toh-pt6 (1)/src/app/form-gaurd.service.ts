import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {UserFormComponent} from './userform/userform.component';

@Injectable({
  providedIn: 'root'
})
export class FormGaurdService implements CanDeactivate<UserFormComponent> {
  
    canDeactivate(component:UserFormComponent):boolean{
  
      if(component.form.dirty){
            return confirm('Are you sure you want to discard your changes?');
          }
            return true;
    }
    
  }
