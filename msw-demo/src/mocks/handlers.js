
import { http, HttpResponse } from 'msw'
import mockData from './mockData/mockData.json'
const tripStore = new Map()
export const handlers = [
  http.get('https://www.yatra.com/trip', () => {
    return HttpResponse.json(mockData) // Return the entire mockData object
  }),
  // New POST handler
  http.post('https://www.yatra.com/trip', async ({ request }) => {
    const newTrip = await request.json()
    // Generate a unique ID if not provided
    if (!newTrip.id) {
      newTrip.id = Date.now().toString()
    }
    // Store the new trip
    tripStore.set(newTrip.id, newTrip)
    // Return 201 Created status with the new trip data
    return HttpResponse.json(newTrip, { 
      status: 200
    })
  }) 
]



// import { http, HttpResponse } from 'msw'
// import mockData from './mockData/mockData.json'

// // Store for tracking posted trips
// const tripStore = new Map()

// export const handlers = [
//   // Existing GET handler
//   http.get('https://www.yatra.com/trip', () => {
//     return HttpResponse.json(mockData)
//   }),
  
//   // New POST handler
//   http.post('https://www.yatra.com/trip', async ({ request }) => {
//     const newTrip = await request.json()
    
//     // Generate a unique ID if not provided
//     if (!newTrip.id) {
//       newTrip.id = Date.now().toString()
//     }
    
//     // Store the new trip
//     tripStore.set(newTrip.id, newTrip)
    
//     // Return 201 Created status with the new trip data
//     return HttpResponse.json(newTrip, { 
//       status: 201 
//     })
//   })
// ]