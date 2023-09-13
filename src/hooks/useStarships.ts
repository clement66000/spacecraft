import { useQuery } from "@tanstack/react-query";

export const fetchStarships = async () => {
  const response = await fetch("https://swapi.py4e.com/api/starships/");
  return await response.json();
};

export const useStarships = () => {
  return useQuery(["dataFromApi"], fetchStarships);
};
