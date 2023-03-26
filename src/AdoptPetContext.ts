import { createContext } from "react";
import { Pet } from "./ApiResponsesTypes";

const AdoptPetContext = createContext<
    [Pet | null, (adoptedPet: Pet | null) => void]
>([
    {
        id: 1337,
        name: "Fido",
        animal: "dog",
        description: "Lorem ipsum",
        breed: "Beagle",
        images: [],
        city: "Seattle",
        state: "WA",
        activeImage: 1,
    },
    () => {},
]);

export default AdoptPetContext;
