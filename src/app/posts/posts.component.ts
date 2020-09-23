import { Component, OnInit } from '@angular/core';
import {JSONPlaceholderService} from '../service/jsonplaceholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'APItest';
  data: Array<any>;
  posts: Array<any>;

  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.JSONPlaceholder.getData().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  // tslint:disable-next-line:typedef
  getPost(){
    this.JSONPlaceholder.getData().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  // tslint:disable-next-line:typedef
  createPost(input: HTMLInputElement) {
    const post = { title: input.value
    };
    input.value = '';

    this.JSONPlaceholder.postData(post)
      .subscribe(response => {
        // post.id = response.id;
        // this.posts.splice(0, 0, post);
        console.log(post, response);
      });
  }

  // tslint:disable-next-line:typedef
  updatePost(post) {
    this.JSONPlaceholder.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }
  // tslint:disable-next-line:typedef
  deletePost(post) {
    this.JSONPlaceholder.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
