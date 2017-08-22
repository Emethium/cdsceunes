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
      {id: 1, name: 'DCAB - Departamento de Ciências Agrárias e Biológicas'},
      {id: 2, name: 'DCN - Departamento de Ciências Naturais'},
      {id: 3, name: 'DCS - Departamento de Ciências da Saúde'},
      {id: 4, name: 'DCEL - Departamento de Computação e Eletrônica'},
      {id: 5, name: 'DECH - Departamento de Educação e Ciências Humanas'},
      {id: 6, name: 'DETEC - Departamento de Engenharias e Tecnologia'},
      {id: 7, name: 'DMA - Departamento de Matemática Aplicada'},
    ];

    const disciplines = [
      {id: 1, name: 'Programação I'},
      {id: 2, name: 'Introdução a Engenharia de Computação'},
      {id: 3, name: 'Circuitos Elétricos I'},
      {id: 4, name: 'Programação II'},
      {id: 5, name: 'Práticas de Laboratório'},
      {id: 6, name: 'Circuitos Elétricos II'},
      {id: 7, name: 'Estrutura de Dados I'},
      {id: 8, name: 'Eletromagnetismo II'},
      {id: 9, name: 'Estrutura de Dados II'},
      {id: 10, name: 'Arquitetura de Computadores'},
      {id: 11, name: 'Programação III'},
      {id: 12, name: 'Sinais e Sistemas'},
      {id: 13, name: 'Sistemas Operacionais'},
      {id: 14, name: 'Eletrônica Básica I'},
      {id: 15, name: 'Instalações Elétricas'},
      {id: 16, name: 'Engenharia de Sofware'},
      {id: 17, name: 'Eletrônica Digital'},
      {id: 18, name: 'Linguagens de Programação'},
      {id: 19, name: 'Análise e Modelagem de Sistemas Dinâmicos'},
      {id: 20, name: 'Eletrônica Básica II'},
      {id: 21, name: 'Laboratório de Controle Automático'},
      {id: 22, name: 'Teleprocessamento'},
      {id: 23, name: 'Processos Estocásticos'},
      {id: 24, name: 'Computação Gráfica'},
      {id: 25, name: 'Sistemas Digitais'},
      {id: 26, name: 'Linguagens Formais e Autômatos'},
      {id: 27, name: 'Sistemas Realimentados'},
      {id: 28, name: 'Sistemas Embarcados'},
      {id: 29, name: 'Redes de Computadores'},
      {id: 30, name: 'Fundamentos da Teoria da Computação'},
      {id: 31, name: 'Banco de Dados'},
      {id: 32, name: 'Compiladores'},
      {id: 33, name: 'Avaliação de Desempenho de Sistemas Computacionais'},
      {id: 34, name: 'Projeto de Graduação I'},
      {id: 35, name: 'Projeto de Graduação II'}
    ];

    const commissions = [
      {id: 1, name: 'Comissão de Ensino', minNumber: 1, maxNumber: 3,
        teachers: 'Luciana Lee, Sandra Regina Rocha Silva e Silvia das Dores Rissino'},
      {id: 2, name: 'Comissão de Infraestrutura', minNumber: 1, maxNumber: 3,
      teachers: 'Helder Roberto de Oliveira Rocha, Wilian Hiroshi Hisatugu e Aníbal Cotrina Atencio'},
      {id: 3, name: 'Comissão de Pesquisa e Extensão', minNumber: 1, maxNumber: 3,
        teachers: 'Francisco de Assis Souza dos Santos, Flávio Duarte Couto Oliveira e Anibal Cotrina Atencio'},
      {id: 4, name: 'Comissão de Recursos Humanos', minNumber: 1, maxNumber: 3,
        teachers: 'Daniel José Custódio Coura, Wanderley Cardoso Celeste e Luís Otávio Rigo Júnior'}
    ];

    const positions = [
      {id: 1, name: 'Cargo 1'},
      {id: 2, name: 'Cargo 2'},
      {id: 3, name: 'Cargo 3'},
      {id: 4, name: 'Cargo 4'},
      {id: 5, name: 'Cargo 5'},
      {id: 6, name: 'Cargo 6'},
      {id: 7, name: 'Cargo 7'},
      {id: 8, name: 'Cargo 8'},
      {id: 9, name: 'Cargo 9'},
      {id: 10, name: 'Cargo 10'},
    ];

    return {teachers, departments, disciplines, commissions, positions};
  }
}
