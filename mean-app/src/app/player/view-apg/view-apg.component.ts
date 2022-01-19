import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apg-player',
  templateUrl: './view-apg.component.html',
  styleUrls: ['./view-apg.component.css']
})
export class apgPlayerComponent implements OnInit {
  player:any;
  data:any;

  constructor(private playerService:PlayerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAPGData();
  }

  getAPGData() {
    this.playerService.apgData().subscribe(res => {
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
      this.getAPGData();
    });
  }
}