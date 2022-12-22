import axios, { AxiosInstance } from 'axios'
import React, { createContext, useContext } from 'react'

export type AxiosContextInterface = {
  axiosRef: AxiosInstance
}

export const AxiosContext = createContext<AxiosContextInterface | null>(null)

const instance = axios.create()

type Props = {
  children: React.ReactNode
}

export function AxiosProvider({ children }: Props) {
  // const [isLoading, setLoading] = useState(false)
  // const [error, setError] = useState('')
  // const { accessToken, logout } = useAuthContext()

  // useEffect(() => {
  //   async function bootstrap() {
  //     if (!accessToken) {
  //       return
  //     }

  //     function setAuthHeader(config: AxiosRequestConfig) {
  //       config.headers!.Authorization = 'Bearer ' + accessToken
  //       instance.defaults.headers.common.Authorization = basicAuthHeader
  //     }

  //     instance.interceptors.request.use(
  //       async function (config) {
  //         setAuthHeader(config)

  //         console.info('==================================== REQUEST')
  //         console.info(`${config.method} ${config.url} `)
  //         console.info(config.data)
  //         console.info('====================================')

  //         return config
  //       },
  //       function (err) {
  //         const customError = errorToCustomError(err)
  //         setError(customError.message)
  //         return Promise.reject(err)
  //       },
  //     )

  //     instance.interceptors.response.use(
  //       async function (response) {
  //         if (response.status === 417) {
  //           logout()
  //           return Promise.reject(response)
  //         }

  //         console.info('==================================== RESPONSE')
  //         console.info(
  //           `${response.request._method} ${response.request.responseURL}`,
  //         )
  //         console.info(response.status)
  //         console.info('====================================')

  //         return response
  //       },
  //       async function (err) {
  //         console.error('====================================')
  //         console.error(err.request.responseURL)
  //         console.error(err.response.status)
  //         console.error(err.response.data)
  //         console.error('====================================')

  //         // Snackbar.show({
  //         //   text: errorToCustomError(err).message,
  //         //   duration: Snackbar.LENGTH_SHORT,
  //         //   backgroundColor: colors.error,
  //         //   textColor: colors.white,
  //         // })

  //         // TODO: log error
  //         // if (
  //         //   typeof error.response === 'undefined' ||
  //         //   [401, 419].includes(error.response.status)
  //         // ) {
  //         //   logout()
  //         // }
  //         return Promise.reject(err)
  //       },
  //     )
  //   }

  //   bootstrap()
  // }, [accessToken, basicAuthHeader, logout])

  return (
    <AxiosContext.Provider
      value={{
        axiosRef: instance,
      }}>
      {children}
    </AxiosContext.Provider>
  )
}

export function useAxiosContext(): NonNullable<AxiosContextInterface> {
  const context = useContext(AxiosContext)
  if (!context) {
    throw new Error('useAxiosContext must be used within an AxiosProvider')
  }

  return context
}
