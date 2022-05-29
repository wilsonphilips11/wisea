import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.page.html',
  styleUrls: ['./payment-summary.page.scss'],
})
export class PaymentSummaryPage implements OnInit {
  paymentId: string;
  public historyDetail: Observable<History>

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToHistoryDetail() {
    this.paymentId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/history-detail/${this.paymentId}`]);
  }

  goToExplore() {
    this.router.navigate([`/menu/tabs/explore`]);
  }

}
