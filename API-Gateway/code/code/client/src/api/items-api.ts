import { apiEndpoint } from '../config'
import { Item } from '../types/Item'
import { CreateItemRequest } from '../types/CreateItemRequest'
import { UpdateItemRequest } from '../types/UpdateItemRequest'
import Axios from 'axios'

export async function getItems(): Promise<Item[]> {
  console.log('Fetching items')

  const response = await Axios.get(`${apiEndpoint}/items`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log('Items:', response.data)
  return response.data
}

export async function createItem(
  newItem: CreateItemRequest
): Promise<void> {
  await Axios.put(`${apiEndpoint}/items`, JSON.stringify(newItem), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function patchItem(
  itemId: string,
  updatedItem: UpdateItemRequest
): Promise<void> {
  await Axios.patch(`${apiEndpoint}/items/${itemId}`, JSON.stringify(updatedItem), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function deleteItem(
  itemId: string
): Promise<void> {
  await Axios.delete(`${apiEndpoint}/items/${itemId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}