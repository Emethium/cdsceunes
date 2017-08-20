import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teachers = [
      { id: 1,  name: 'Leonardo Silveste' },
      { id: 11, name: 'Aníbal Cotrina' },
      { id: 12, name: 'Daniel Custódio Coura' },
      { id: 13, name: 'Sílvia Rissino' },
      { id: 14, name: 'Henrique Cristovão' },
      { id: 15, name: 'Luciana Lee' },
      { id: 16, name: 'Helcio Mello' },
      { id: 17, name: 'Leandro Costalonga' },
      { id: 18, name: 'Sandra Regina Rocha' },
      { id: 19, name: 'Maria das Graças da Silva Teixeira' },
      { id: 20, name: 'Willian Hisatagu' },
      { id: 21, name: 'Flavio Duarte' },
      { id: 22, name: 'Francisco de Assis Souza' },
      { id: 23, name: 'Helder Rocha' },
      { id: 24, name: 'Flavio Duarte' },
      { id: 25, name: 'Luís Otávio Rigo' },
      { id: 26, name: 'Roney Pignaton' },
      { id: 27, name: 'Wanderley Cardoso Celeste' }
    ];
    return {teachers};
  }
}
