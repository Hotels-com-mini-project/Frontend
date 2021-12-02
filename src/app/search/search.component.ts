import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  kw:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchKeyword(searchForm: NgForm) {
    this.kw = searchForm.value.keyword;

    this.router.navigate(['/list', this.kw]);
  }
}
