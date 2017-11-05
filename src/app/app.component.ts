import { Component ,VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    percentDone: number;
    uploadSuccess: boolean;
  
    constructor( private http: HttpClient) { }
      
    version = VERSION
    
    upload(files: File[])
    {
      this.uploadAndProgress(files);
    }

    uploadAndProgress(files: File[])
    {
      var formData = new FormData();
      Array.from(files).forEach(f => formData.append('file',f))
      
      this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.uploadSuccess = true;
          }
          console.log(files);
      });
    }
  
    // basicUpload(files: File[]){
    //   var formData = new FormData();
    //   Array.from(files).forEach(f => formData.append('file', f))
    //   this.http.post('https://file.io', formData)
    //     .subscribe(event => {  
    //       console.log('done')
    //     })
    // }
    
    //this will fail since file.io dosen't accept this type of upload
    //but it is still possible to upload a file with this style
    
    //this will fail since file.io dosen't accept this type of upload
    //but it is still possible to upload a file with this style
    // uploadAndProgressSingle(file: File){    
    //   this.http.post('https://file.io', file, {reportProgress: true, observe: 'events'})
    //     .subscribe(event => {
    //       if (event.type === HttpEventType.UploadProgress) {
    //         this.percentDone = Math.round(100 * event.loaded / event.total);
    //       } else if (event instanceof HttpResponse) {
    //         this.uploadSuccess = true;
    //       }
    //   });
    // }
}
