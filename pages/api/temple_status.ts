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
  const params = {
    email: 'info@iskconsahibabad.com'
  }
  try{
    const resData = await axios.get(`${baseUrl}temple_status/activity`, {params})
    return  res.status(200).json(resData.data)
  }
  catch(e:any) {
    console.log(e)
     res.status(400).json(e)
  }
}
