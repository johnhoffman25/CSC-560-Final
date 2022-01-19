import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players:any;
  data:any;

  constructor(private playerService:PlayerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPlayersData();
  }

  getPlayersData() {
    this.playerService.getData().subscribe(res => {
      console.log(res);
      this.players = res;
    })
  }
  
  deleteData(id:any) {
    this.playerService.deleteData(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      });
      this.getPlayersData();
    });
  }
}