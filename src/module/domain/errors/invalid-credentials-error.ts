export class InvalidCredentialsError extends Error {
  constructor() {
    super('This happens when the credentials are wrong');
    this.name = 'InvalidCredentialsError';
  }
}
