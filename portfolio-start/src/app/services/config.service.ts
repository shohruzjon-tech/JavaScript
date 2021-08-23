export class ConfigService {
    private _api:string ='';
    static set(property:string,value:string):void{
        this['_'+property] = value;
    }
    static get(property:string):string{
        return this['_'+property];
    }
}
