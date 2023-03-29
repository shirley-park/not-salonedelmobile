import request from 'superagent'
// import router from '../../server/routes/furnListRouter'
import FurnitureModel from '../models/Furnmodel'

export function fetchFurnList(): Promise<FurnitureModel> {
  // 3. API request to reddit client/apis/reddit.ts
  return request.get('/').then((res) => res.body)
  // .catch((err) => err.message)
}
