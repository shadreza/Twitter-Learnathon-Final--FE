import { Modal } from "../components/interfaces/modal";

export class ModalGlobalConstants {
  public static isModalLive: boolean = false

  public static emptyModalOption: Modal = {
    modalTitle : "",
    modalDescription : "",
    bothAcceptAndCancel: false
  }

  public static modalOptions: Modal = this.emptyModalOption

  public static clearModal(): void {
    this.modalOptions = this.emptyModalOption
    this.setModalVisibility(false)
  }

  public static setModalVisibility(setBool: boolean): void {
    this.isModalLive = setBool
  }

  public static setModal(modalToSet: Modal, setVisibility: boolean): void {
    this.modalOptions = modalToSet
    this.setModalVisibility(setVisibility)
  }

}
