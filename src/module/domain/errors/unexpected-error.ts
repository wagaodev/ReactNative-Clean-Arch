export class UnexpectedError extends Error {
  constructor() {
    super('Todo mundo erra, e dessa vez fomos nós que erramos.');
    this.name = 'UnexpectedError';
  }
}
