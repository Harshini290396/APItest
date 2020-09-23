import {Injectable, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService{

  constructor(private http: HttpClient) { }
 // title: string;
  postId;
  private url = 'https://jsonplaceholder.typicode.com/posts';


  // @ts-ignore
  getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  // @ts-ignore
  postData(post): Observable<any>{

    return this.http.post<any>(this.url, JSON.stringify(post));
   // this.http.post<any>(url, { title: 'Angular POST Request Example' }).subscribe(data => {
    //  this.postId = data.id;
   // });
  }
  // tslint:disable-next-line:typedef
  updatePost(post){
     return this.http.put(this.url + '/' + post.id , JSON.stringify({ isRead: true }));
    // return this.http.patch(this.url + '/' + post.id , JSON.stringify({ isRead: true }));
    // return this.http.put(this.url, JSON.stringify(post));
  }

  // tslint:disable-next-line:typedef
  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
