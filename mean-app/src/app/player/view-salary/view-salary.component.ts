import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salary-player',
  templateUrl: './view-salary.component.html',
  styleUrls: ['./view-salary.component.css']
})
export class salaryPlayerComponent implements OnInit {
  player:any;
  data:any;

  constructor(private playerService:PlayerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSalaryData();
  }

  getSalaryData() {
    this.playerService.salaryData().subscribe(res => {
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
      this.getSalaryData();
    });
  }
}