import request from 'superagent'

import FurnitureModel from '../models/Furnituremodel'

const Url = '/api/v1/mycollection/'

export function fetchFurnListApi(): Promise<FurnitureModel[]> {
  // 3. API request to the server (router and db)
  return request.get(Url).then((res) => res.body)
}

export function addFurnItemApi(
  newItem: FurnitureModel
): Promise<FurnitureModel> {
  return request
    .post(Url)
    .send(newItem)
    .then((res) => res.body)
}

export function deleteItemApi(id: FurnitureModel['id']) {
  return request.delete(Url + id).then((res) => res.body)
}
