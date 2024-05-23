"use client";

import React, { useState, useEffect } from "react";
import { TimerContainer } from "./_TimerContainer";

export default function Countdown() {
	const calculateTimeLeft = () => {
		const targetDate = new Date("2024-06-28T19:00:00-03:00");
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((difference / 1000 / 60) % 60);
		const seconds = Math.floor((difference / 1000) % 60);

		return { days, hours, minutes, seconds };
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>ABERTURA</h1>
			<TimerContainer
				days={timeLeft.days}
				hours={timeLeft.hours}
				minutes={timeLeft.minutes}
				seconds={timeLeft.seconds}
			/>
		</div>
	);
}
