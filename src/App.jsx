import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense, useState } from "react";
import AdoptPetContext from "./AdoptPetContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
    const adoptPet = useState(null);
    const [theme, setTheme] = useState("darkMode");
    return (
        <div
            className="p-0 m-0"
            style={{
                background:
                    "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            }}
        >
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
                            <Route path="/details/:id/" element={<Details />} />
                        </Routes>
                    </AdoptPetContext.Provider>
                </Suspense>
            </QueryClientProvider>
        </div>
    );
};

export default App;
