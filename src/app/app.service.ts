import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import {Headers,RequestOptions} from '@angular/http';

    @Injectable()
    export class MyHttpService {
        apiEndPoint="C:\Users\ishu.mishra97\Desktop";
    constructor(private _http:Http) {}

     mishra(url:string) 
    {
        let headers = new Headers();
        let formData:FormData = new FormData();
        let options = new RequestOptions({ headers: headers });
        return this._http.post(`${this.apiEndPoint}`, formData, options)
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }
}