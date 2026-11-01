import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface GameDetail {
  name: string;
  description_raw: string;
}

const apiClient = new APIClient<GameDetail>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
