import { Suspense, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams";
import Details from "./Details";
import AdoptPetContext from "./AdoptPetContext";
import { Pet } from "./ApiResponsesTypes";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = () => {
    const adoptPet = useState(null as Pet | null);

    return (
        <div
            className="p-0 m-0"
            style={{
                background:
                    "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            }}
        >
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Suspense
                        fallback={
                            <div className="loading-pane">
                                <h2 className="loader">🌀</h2>
                            </div>
                        }
                    >
                        <AdoptPetContext.Provider value={adoptPet}>
                            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
                                <Link
                                    to="/"
                                    className="text-6xl hover:text-gray-200 text-white"
                                >
                                    Adopt Me!
                                </Link>
                            </header>
                            <Routes>
                                <Route path="/" element={<SearchParams />} />
                                <Route
                                    path="/details/:id/"
                                    element={<Details />}
                                />
                            </Routes>
                        </AdoptPetContext.Provider>
                    </Suspense>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("root");

if (!container) {
    throw new Error("No container to render to!");
}

const root = createRoot(container);
root.render(<App />);
