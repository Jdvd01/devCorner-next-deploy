export interface ModalContentInterface {
  content: string
  status: 'success' | 'error'
}

export interface ModalInfoInterface {
  open: boolean
  isRequestSuccess: boolean
}
