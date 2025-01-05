
import { http, HttpResponse } from 'msw'
import mockData from './mockData/mockData.json'

export const handlers = [
  http.get('https://www.yatra.com/trip', () => {
    return HttpResponse.json(mockData) // Return the entire mockData object
  }), ]