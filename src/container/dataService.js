import axios from "axios";
import { fallback } from "./fallbackObj"; // Object to fallback if somenthing fails to load

const API_URL = import.meta.env.VITE_SERVER_URI;

//Get Data
// portfolio/en/about
const requestData = async (path) => {
  const res = await axios
    .get(`${API_URL}${path}`)
    .catch((err) => console.log(err));

  const data = await res.data;
  return data;
};

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);

  return response.data;
};

export { createGoal, getGoals, deleteGoal, requestData, fallback };
