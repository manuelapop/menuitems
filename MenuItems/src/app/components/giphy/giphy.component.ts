import { Component, OnInit} from '@angular/core';
import { GetDataService } from './../../get-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html'
})
export class GiphyComponent implements OnInit{
  image;
  images;
  imageurl;
  errormessage: string;
  searchForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private getDataService: GetDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      imageSearch: ['', Validators.required]
    });

  }

  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.loading = true;
    this.errormessage = "";
    this.getDataService.getData(this.searchForm.value.imageSearch).subscribe((res) => {
      this.images = res.data;
      if (this.images.length > 0)
      {
        this.image = this.images[0].images.original; 
        this.imageurl = this.image.url;
      }
      this.loading = false;
    },
      (err) => { console.log(err), this.loading = false; }
    );
  }

}
