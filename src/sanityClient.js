
// sanityClient.js
import { createClient } from '@sanity/client'
export const client = createClient({
  projectId: '2qkepv2o',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})