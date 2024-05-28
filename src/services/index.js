import axios from 'axios';
import createAuthService from './auth';

// Set the base URL for the API
const baseURL = window.baseURL
export default {
    auth: createAuthService(axios, baseURL)
};