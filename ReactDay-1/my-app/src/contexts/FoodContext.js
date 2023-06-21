// State management is a place where you create a global variable for your state/usestate so that all components can have access to it as long as it is called. you know that if you call usjestate in a component, its only limited to that page but the statemamangent help us to call a state variable in a place like contexts.js so that we can use it in as many components as we wish.

// first step is to import somethings. first 3 things are usestate, createcontext and useeffect(this is imported peradventure if we are fetching from api)

import { useState, createContext, useEffect } from "react";


// this below also means creating and exporting the component at once so no need to still write export default below. createContext() is a hook function. you can use this create and export method in other components especially if it has small contents.
export const FoodContext = createContext();

function FoodProvider(props) {
    const [cart, setCart] = useState(0);
    const [person, setPerson] = useState("Jonas");
    const [num, setNum] = useState(0);

    return (
        <FoodContext.Provider value={{person, cart, num, setCart}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodProvider;