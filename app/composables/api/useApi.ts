export const useApi = () => {
    const get = async (url: string, opts = {}) => {
      const { data, error } = await useFetch(url, opts)
      return { data, error }
    }
  
    return { get }
  }
  