export default class CircleController {
  constructor() {
    this.circleDriver = null;
  }

  async prepare() {
    if (!this.circleDriver) {
      const { default: CircleDriver } = await import('../drivers/CircleDriver');
      this.circleDriver = new CircleDriver();
    }

    return this;
  }

  async calculate(raio) {
    const instance = await this.prepare();
    return instance
      .circleDriver
      .calculate(raio);
  }
}