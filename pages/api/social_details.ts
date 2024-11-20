import type { NextApiRequest, NextApiResponse } from 'next'
import { baseUrl } from '../../constants/common'
import axios from 'axios'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = {
    email: 'info@iskconsahibabad.com'
  }
  try{
    const resData = await axios.post(`${baseUrl}social/details`, data)
    return  res.status(200).json(resData.data)
  }
  catch(e:any) {
    console.log(e)
     res.status(400).json(e)
  }
}
