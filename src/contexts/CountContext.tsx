import { createContext, useState } from "react";

// bygga context -typpa upp våran state sedan bygger vi contexten. 
export type CountContextType = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};
export const CountContext = createContext<CountContextType | null>(null);




// bygga context provider-komponent- typpa upp children sedan skickar vi {--} till children med hjälp av provider.
type CountContextProviderProps = {
	children: React.ReactNode;
};

export function CountContextProvider({
	children,
}: Readonly<CountContextProviderProps>) {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
}
