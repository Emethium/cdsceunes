import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommissionService } from './../_services/commission.service';
import { Commission } from './../_models/commission';

@Component({
    selector: 'app-commissions',
    templateUrl: './commissions.component.html',
    styleUrls: ['./commissions.component.css']
})

export class CommissionsComponent implements OnInit {
    commissions: Commission[];
    selectedCommission: Commission;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commissionService: CommissionService
    ) {}

    getCommissions(): void {
        this.commissionService.getCommissions().then(commissions => this.commissions = commissions);
    }

    ngOnInit(): void {
        this.getCommissions();
    }

    onSelect(commission: Commission): void {
        this.selectedCommission = commission;
     }

    gotoDetail(): void {
        this.router.navigate(['commissions/detail', this.selectedCommission.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.commissionService.create(name)
          .then(commission => {
            this.commissions.push(commission);
          });
    }

    delete(commission: Commission): void {
        this.commissionService.delete(commission.id)
        .then(() => {
          this.commissions = this.commissions.filter(t => t !== commission);
        });
    }

}

