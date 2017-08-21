import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Discipline } from './../_models/discipline';
import { DisciplineService } from './../_services/discipline.service';

@Component({
    selector: 'app-disciplines',
    templateUrl: './disciplines.component.html',
    styleUrls: ['./disciplines.component.css']
})

export class DisciplinesComponent implements OnInit {
    disciplines: Discipline[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private disciplineService: DisciplineService
    ) {}

    getDisciplines(): void {
        this.disciplineService.getDisciplines().then(disciplines => this.disciplines = disciplines);
    }

    ngOnInit(): void {
        this.getDisciplines();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.disciplineService.create(name)
          .then(discipline => {
            this.disciplines.push(discipline);
          });
    }

    delete(discipline: Discipline): void {
        this.disciplineService.delete(discipline.id)
        .then(() => {
          this.disciplines = this.disciplines.filter(t => t !== discipline);
        });
    }

}

