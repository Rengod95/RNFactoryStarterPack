export class InitializationSingleTon<T extends InitializationSingleTon<T>> {
  private static instances: Record<string, any> = {};

  constructor() {
    if (new.target === InitializationSingleTon) {
      throw new TypeError('Cannot construct DeferredInitializationSingleton instances directly');
    }
  }

  static getInstance<T extends InitializationSingleTon<T>>(this: new () => T): T {
    const className = this.name;

    if (!InitializationSingleTon.instances[className]) {
      InitializationSingleTon.instances[className] = new this();
    }

    return InitializationSingleTon.instances[className];
  }

  async initialize() {}
}
