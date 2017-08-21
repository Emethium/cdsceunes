import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Teacher } from './../_models/teacher';
import { TeacherService } from './../_services/teacher.service';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})

export class TeachersComponent implements OnInit {
    teachers: Teacher[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private teacherService: TeacherService
    ) {}

    getTeachers(): void {
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    }

    ngOnInit(): void {
        this.getTeachers();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.teacherService.create(name)
          .then(teacher => {
            this.teachers.push(teacher);
          });
    }

    delete(teacher: Teacher): void {
        this.teacherService.delete(teacher.id)
        .then(() => {
          this.teachers = this.teachers.filter(t => t !== teacher);
        });
    }

}

