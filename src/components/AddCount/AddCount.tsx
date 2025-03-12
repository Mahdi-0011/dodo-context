import { useContext } from "react";
import { AnotherCountContext } from "../../contexts/AnotherCountContext";

export default function AddCount() {
	const context = useContext(AnotherCountContext);

	return (
		<div>
			<h2>AddCount</h2>
			<p>Count: {context?.count}</p>
			<button
				onClick={() => {
					context?.add();
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					context?.subtract();
				}}
			>
				Subtract
			</button>
			<button
				onClick={() => {
					context?.reset();
				}}
			>
				reset
			</button>
			<button
				onClick={() => {
					context?.divideBy2();
				}}
			>
				divide by 2
			</button>
			<button
				onClick={() => {
					context?.setTO100();
				}}
			>
				set to 100
			</button>
			<button
				onClick={() => {
					context?.setTO12();
				}}
			>
				set to 12
			</button>
		</div>
	);
}
