import {
  ModalContentInterface,
  ModalInfoInterface,
} from '@/common/utils/types/newsletter'
import { isEmpty, verifyEmail } from '@/common/utils/validations/newsletter'
import {
  cmsClient,
  CmsRequestError,
  CmsRequestResult,
} from '@/services/cms/cmsService'
import {
  Newsletter,
  NewsletterAttributes,
} from '@/services/cms/strapi/types/newsletter'
import React, { useState } from 'react'

const initialModalInfo: ModalInfoInterface = {
  open: false,
  isRequestSuccess: false,
}

const initialModalContent: ModalContentInterface = {
  status: 'error',
  content: '',
}

const initialData = { email: '' }

export function useNewsletter() {
  const [data, setData] = useState<NewsletterAttributes>(initialData)
  const [modalInfo, setModalInfo] =
    useState<ModalInfoInterface>(initialModalInfo)

  const [modalContent, setModalContent] =
    useState<ModalContentInterface>(initialModalContent)

  const handleModal = (
    requestInfo: CmsRequestResult<Newsletter> | CmsRequestError
  ) => {
    setModalInfo({
      open: true,
      isRequestSuccess: requestInfo.success,
    })

    setModalContent({
      status: requestInfo.success ? 'success' : 'error',
      content:
        requestInfo.success ?
          `Welcome to our newsletter, feel free to navigate through our blogs. \nWe are happy you are here!`
        : `There was an error while subscribing to the newsletter, please try again later.`,
    })
  }

  const setDefaultModal = () => {
    setModalInfo(initialModalInfo)
    setModalContent(initialModalContent)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    const validEmail = verifyEmail(data.email) || !isEmpty(data.email)

    if (!validEmail) {
      return
    }

    const requestInfo = await cmsClient.subscribeToNewsletter({
      email: data.email,
    })
    handleModal(requestInfo)
    setData(initialData)
  }

  return {
    handleChange,
    handleSubmit,
    data,
    modalInfo,
    setModalInfo,
    setDefaultModal,
    modalContent,
  }
}
