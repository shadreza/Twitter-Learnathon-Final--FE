export class GlobalConstants {
  public static isModalLive: boolean = false;
  public static setModalVisibility(setBool: boolean): void {
    this.isModalLive = setBool
  }
}
