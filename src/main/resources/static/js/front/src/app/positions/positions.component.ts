import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PositionService } from './../_services/position.service';
import { Position } from './../_models/position';

@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.css']
})

export class PositionsComponent implements OnInit {
    positions: Position[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private positionService: PositionService
    ) {}

    getPositions(): void {
        this.positionService.getPositions().then(positions => this.positions = positions);
    }

    ngOnInit(): void {
        this.getPositions();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.positionService.create(name)
          .then(position => {
            this.positions.push(position);
          });
    }

    delete(position: Position): void {
        this.positionService.delete(position.id)
        .then(() => {
          this.positions = this.positions.filter(t => t !== position);
        });
    }

}

