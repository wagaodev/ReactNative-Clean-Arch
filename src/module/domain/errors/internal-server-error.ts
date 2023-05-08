export class InternalServerError extends Error {
  constructor() {
    super('When the error or failure happens on the server side');
    this.name = 'InternalServerError';
  }
}
