import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../service/player.service';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player = new Player();
  id:any;
  data:any;

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private toastr: ToastrService) { }

  form = new FormGroup({
    name: new FormControl(''),
    jersey_number: new FormControl(''),
    salary: new FormControl(''),
    ppg: new FormControl(''),
    rpg: new FormControl(''),
    apg: new FormControl('')
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getData();
  }

  getData() {
    this.playerService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.player = this.data;
      this.form = new FormGroup({
        name: new FormControl(this.player.name),
        jersey_number: new FormControl(this.player.jersey_number),
        salary: new FormControl(this.player.salary),
        ppg: new FormControl(this.player.ppg),
        rpg: new FormControl(this.player.rpg),
        apg: new FormControl(this.player.apg)
      });
    });
  }

  updateData() {
    this.playerService.updateData(this.id, this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      })
    });
  }
}
