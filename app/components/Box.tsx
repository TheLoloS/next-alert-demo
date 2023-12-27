"use client";

import { useAlert } from "next-alert";
import { Alerts } from "next-alert";
import { useState } from "react";

const Box = () => {
	const { addAlert } = useAlert();
	const [timer, setTimer] = useState(3000);
	const [position, setPosition] = useState<"top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-top"
    | "center-bottom">("top-right");
	const [direction, setDirection] = useState<"right" | "left" | "top" | "bottom" | undefined>("right");

	return (
		<>
		<div className="relative">
			<div className="flex flex-row gap-2">
				<button
					onClick={() => {
						addAlert(
							"Notification",
							"Hello, this is a notification!sa dsa,dls,adlksal dksadlskadlsakdl;skdlsadk; sadk;asldk;saldk",
							"info",
						);
					}}
					className="bg-blue-500 p-2 rounded-md text-white"
				>
					Info
				</button>
				<button
					onClick={() => {
						addAlert(
							"Notification",
							"Hello, this is a notification!",
							"success",

						);
					}}
					className="bg-green-500 p-2 rounded-md text-white"
				>
					Success
				</button>
				<button
					onClick={() => {
						addAlert(
							"Notification",
							"Hello, this is a notification!",
							"warning",
						);
					}}
					className="bg-yellow-500 p-2 rounded-md text-white"
				>
					Warning
				</button>
				<button
					onClick={() => {
						addAlert("Notification", "Hello, this is a notification!", "error");
					}}
					className="bg-red-500 p-2 rounded-md text-white"
				>
					Error
				</button>
			</div>
			<div className="my-6 gap-3 flex flex-col justify-center items-center">
				<label htmlFor="position" className="text-white">Position</label>
				<select name="position" id="" defaultValue="top-right" className="text-neutral-700 rounded-lg w-30 p-3 h-12"
				onChange={(e) => {
					// @ts-ignore
					setPosition(e.target.value);
				}}
				>
					<option value="top-right">Top Right</option>
					<option value="top-left">Top Left</option>
					<option value="bottom-right">Bottom Right</option>
					<option value="bottom-left">Bottom Left</option>
					<option value="center-top">Center Top</option>
					<option value="center-bottom">Center Bottom</option>

				</select>
				<label htmlFor="timer" className="text-white ">Duration in ms</label>
				<input name="timer" type="number" placeholder="3000" className="text-neutral-700 rounded-lg p-3 w-30 h-12"
				onChange={(e) => {
					// @ts-ignore
					setTimer(Number(e.target.value));
				}}
				/>
				<label htmlFor="direction" className="text-white ">Direction</label>
				<select name="direction" id="" className="text-neutral-700 rounded-lg w-30 p-3 h-12"
				onChange={(e) => {
					// @ts-ignore
					setDirection(e.target.value);
				}}
				>
					<option value="right" selected>Right</option>
					<option value="left">Left</option>
					<option value="top">Top</option>
					<option value="bottom">Bottom</option>
				</select>
			</div>
		</div>
			<Alerts
				position={position}
				direction={direction}
				timer={timer}
				className="rounded-md relative z-50 !w-80"
			>
				<svg
					className="w-4 h-4 text-white absolute top-4 right-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</Alerts>
			</>
	);
};

export default Box;
