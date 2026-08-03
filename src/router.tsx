import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

let routerInstance: any = null;
let queryClientInstance: QueryClient | null = null;

export const getRouter = () => {
  if (routerInstance) return routerInstance;

  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
        },
      },
    });
  }

  const router = createRouter({
    routeTree,
    context: { queryClient: queryClientInstance },
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  routerInstance = router;
  return router;
};
