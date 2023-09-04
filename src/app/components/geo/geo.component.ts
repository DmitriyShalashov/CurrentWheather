import { Component, OnInit ,Output} from '@angular/core';
import { geoData } from 'src/app/models/geo.model';
import { GeoService } from 'src/app/services/geo.service'; 
import {trigger,state,transition,animate,style} from "@angular/animations"
@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  animations: [
        trigger('expandedPanel', [
            state('initial', style({ transform: "translateX(-600px)"})),
            state('expanded', style({ transform: "translateX(0px)" })),
            transition(
                'initial <=> expanded',
                animate('0.8s ease-in-out'),
            ),
            
        ]),
    ],
})
export class GeoComponent implements OnInit {
    geoData={} as geoData
    localTime=""
    countryName=""
    state: string = 'expanded';

    constructor(
        private geoService:GeoService
    ){}
    
    ngOnInit(): void {
        this.geoService.query$.subscribe((q)=>{
            this.geoService.getGeoByQuery(q).subscribe((data:any)=>{
                    setTimeout(()=>{
                        this.state="expanded"
                        this.geoData=data.location
                        this.localTime=new Date(Date.parse(this.geoData.localtime)).toUTCString()
                    },800)
            })
        })
    }

    onQueryChange(){
        if(this.countryName){
            this.state="initial"
            this.geoService.query$.next(this.countryName)
        }
        
    }

    
}

