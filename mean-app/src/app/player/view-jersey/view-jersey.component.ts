import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jersey-player',
  templateUrl: './view-jersey.component.html',
  styleUrls: ['./view-jersey.component.css']
})
export class jerseyPlayerComponent implements OnInit {
  player:any;
  data:any;

  constructor(private playerService:PlayerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getJerseyData();
  }

  getJerseyData() {
    this.playerService.jerseyData().subscribe(res => {
      console.log(res);
      this.player = res;
    })
  }
  
  deleteData(id:any) {
    this.playerService.deleteData(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      });
      this.getJerseyData();
    });
  }
}