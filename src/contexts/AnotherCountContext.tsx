import { createContext, useState } from "react";

// context
export type AnotherCountContextType = {
	count: number;
	add: () => void;
	subtract: () => void;
	reset: () => void;
	divideBy2: () => void;
	setTO100: () => void;
	setTO12: () => void;
};

export const AnotherCountContext =
	createContext<AnotherCountContextType | null>(null);

// context provider-komponent
type AnotherCountContextProviderProps = {
	children: React.ReactNode;
};

export function AnotherCountContextProvider({
	children,
}: Readonly<AnotherCountContextProviderProps>) {
	const [count, setCount] = useState(0);

	const add = () => {
		setCount((prev: number) => prev + 1);
	};

	const subtract = () => {
		setCount((prev: number) => prev - 1);
	};
	// reset
	const reset = () => {
		setCount(0);
	};
	// dela med 2
	const divideBy2 = () => {
		setCount((prev: number) => prev / 2);
	};
	// sätt till 100
	const setTO100 = () => {
		setCount(100);
	};
	// sätt till 12
	const setTO12 = () => {
		setCount(12);
	};

	return (
		<AnotherCountContext.Provider value={{ count, add, subtract, reset, divideBy2, setTO100, setTO12 }}>
			{children}
		</AnotherCountContext.Provider>
	);
}
