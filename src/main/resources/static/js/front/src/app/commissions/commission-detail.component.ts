import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CommissionService } from './../_services/commission.service';
import { Commission } from './../_models/commission';

@Component({
  selector: 'app-commission-detail',
  templateUrl: './commission-detail.component.html',
  styleUrls: [ './commission-detail.component.css' ]
})

export class CommissionDetailComponent implements OnInit {
  commission: Commission;

  constructor(
    private commissionService: CommissionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.commissionService.getCommission(+params.get('id')))
      .subscribe(commission => this.commission = commission);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.commissionService.update(this.commission)
    .then(() => this.goBack());
  }
}
