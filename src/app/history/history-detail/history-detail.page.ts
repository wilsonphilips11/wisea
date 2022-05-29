import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryService } from 'src/app/service/history.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  historyId: string;
  detail: Observable<History>;

  constructor(
    private route: ActivatedRoute,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.historyId = this.route.snapshot.paramMap.get('id');
    this.detail = this.historyService.getHistoryDetail(this.historyId);
  }

}
