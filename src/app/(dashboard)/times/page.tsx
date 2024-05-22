import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function TimesIndex() {
	const times = [
		{
			name: "6º ANO A",
			country: "BRASIL",
			flag: "/bandeiras/Flag_of_Brazil.png",
		},
		{
			name: "6º ANO B",
			country: "ARGENTINA",
			flag: "/bandeiras/Flag_of_Argentina.png",
		},
		{
			name: "6º ANO C",
			country: "ESPANHA",
			flag: "/bandeiras/Flag_of_Spain.png",
		},
		{
			name: "6º ANO D",
			country: "PORTUGAL",
			flag: "/bandeiras/Flag_of_Portugal.png",
		},
	];

	return (
		<div className="flex flex-wrap gap-4">
			{times.map((time) => {
				return (
					<Card key={time.name}>
						<CardHeader>
							<CardTitle>{time.name}</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col items-center">
							<Image
								src={time.flag}
								width={100}
								height={100}
								alt={`Bandeira do ${time.country}`}
							/>
							<p className="font-bold">{time.country}</p>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
