import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rpg-player',
  templateUrl: './view-rpg.component.html',
  styleUrls: ['./view-rpg.component.css']
})
export class rpgPlayerComponent implements OnInit {
  player:any;
  data:any;

  constructor(private playerService:PlayerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRPGData();
  }

  getRPGData() {
    this.playerService.rpgData().subscribe(res => {
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
      this.getRPGData();
    });
  }
}