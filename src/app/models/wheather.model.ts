export class wheatherData{
    constructor(
        public cloud:number,
        public condition:{
            icon:string
            text:string
        },
        public feelslike_c:number,
        public humidity:number,
        public is_day:number,
        public precip_mm:number,
        public wind_kph:number,
        public wind_dir:string,
        public pressure_mb:number,
        public temp_c:number,
    ){}
   
 }