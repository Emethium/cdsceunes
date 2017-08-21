import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teachers = [
      { id: 10,  name: 'Leonardo Silveste' },
      { id: 11, name: 'Aníbal Cotrina' },
      { id: 12, name: 'Daniel Coura' },
      { id: 13, name: 'Sílvia Rissino' },
      { id: 14, name: 'Henrique Cristovão' },
      { id: 15, name: 'Luciana Lee' },
      { id: 16, name: 'Helcio Mello' },
      { id: 17, name: 'Leandro Costalonga' },
      { id: 18, name: 'Sandra Regina Rocha' },
      { id: 19, name: 'Maria das Graças da Silva' },
      { id: 20, name: 'Willian Hisatagu' },
      { id: 21, name: 'Flavio Duarte' },
      { id: 22, name: 'Francisco de Assis' },
      { id: 23, name: 'Helder Rocha' },
      { id: 24, name: 'Flavio Duarte' },
      { id: 25, name: 'Luís Otávio Rigo' },
      { id: 26, name: 'Roney Pignaton' },
      { id: 27, name: 'Wanderley Cardoso' }
    ];

    const departments = [
      {id: 1, name:'DCAB'},
      {id: 2, name:'DCN'},
      {id: 3, name:'DCS'},
      {id: 4, name:'DCEL'},
      {id: 5, name:'DECH'},
      {id: 6, name:'DETEC'},
      {id: 7, name:'DMA'},
    ];
    
    return {teachers, departments};
  }
}
