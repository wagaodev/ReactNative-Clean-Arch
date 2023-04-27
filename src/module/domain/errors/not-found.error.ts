export class NotFoundError extends Error {
  constructor() {
    super('We cannot found what you looking for');
    this.name = 'NotFoundError';
  }
}
