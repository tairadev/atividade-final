import HttpUtil from '../http/HttpUtil.js';

export default class ImcDriver {
  constructor() {
    this.xhr = new HttpUtil();
    this.get = new Proxy(this.xhr.get, {
      apply: function(target, thisArg, args) {
        console.log('target');
        console.log(target);
        console.log('thisArg');
        console.log(thisArg);
        console.log('args');
        console.log(args);
        console.log('chamando...');
        return target(...args);
      }
    });
  }

  /**
   * 
   * @param {Person} person 
   */
  async calculate(raio) {
    const response = await this.xhr
      .post('http://localhost:8080', '/circle/calculate', { raio });

    return await response.json();
  }
}