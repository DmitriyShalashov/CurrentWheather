import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component,OnInit } from "@angular/core";
import { wheatherData } from "src/app/models/wheather.model";
import { GeoService } from "src/app/services/geo.service";

@Component({
    selector:"app-wheather",
    templateUrl:"./wheather.component.html",
    animations: [
        trigger('expandedPanel', [
            state('initial', style({ transform: "translateY(-300px)"})),
            state('expanded', style({ transform: "translateY(0px)" })),
            transition(
                'initial <=> expanded',
                animate('0.8s ease-in-out'),
            ),
            
        ]),
    ],
})
export class WheatherComponent implements OnInit{
    public wheather:wheatherData={} as wheatherData
    state: string = 'expanded';
    constructor(
        private geoService:GeoService
    ){}
    ngOnInit(): void {
        this.geoService.query$.subscribe((q)=>{
            this.state="initial"
            this.geoService.getGeoByQuery(q).subscribe((data:any)=>{
                setTimeout(()=>{
                    this.state="expanded"
                    this.wheather=data.current
                },800)
                
            })
        })
    }
}