import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "687b332d05ce87c2a1e966a1", 
  requiresAuth: true // Ensure authentication is required for all operations
});
