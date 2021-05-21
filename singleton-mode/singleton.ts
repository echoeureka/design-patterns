class Singleton {
  private static singleton: Singleton;
  private constructor() {}
  public static getSingleton(): Singleton {
    if (!this.singleton) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}
