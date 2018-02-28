class Test {
  constructor() {

  }


  async fun1() {
    let data = await this.fun2();
    return data
  }

  fun2() {
    return Promise.resolve('test')
  }
}

function notUse() {
  console.log('not use');
}

export function b() {
  console.log(999);
}

export default Test
