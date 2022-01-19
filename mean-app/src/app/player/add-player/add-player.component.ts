import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  form!: FormGroup;
  submitted=false;
  data:any;

  constructor(private playerService: PlayerService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      jersey_number: ['', Validators.required],
      salary: ['', Validators.required],
      ppg: ['', Validators.required],
      rpg: ['', Validators.required],
      apg: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  insertData() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }

    this.playerService.insertData(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      });
      this.router.navigateByUrl('/');
    });
  }

}
