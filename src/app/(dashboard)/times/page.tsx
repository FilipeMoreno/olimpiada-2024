import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function TimesIndex() {
	const times = [
		{
			id: 1,
			serie: "6º ANO",
			turma: "A",
			pais: "TURQUIA",
			bandeira: "/bandeiras/Flag_of_Turkey.png",
		},
		{
			id: 2,
			serie: "6º ANO",
			turma: "B",
			pais: "CANADÁ",
			bandeira: "/bandeiras/Flag_of_Canada.png",
		},
		{
			id: 3,
			serie: "6º ANO",
			turma: "C",
			pais: "POLÔNIA",
			bandeira: "/bandeiras/Flag_of_Poland.png",
		},
		{
			id: 4,
			serie: "6º ANO",
			turma: "D",
			pais: "JAPÃO",
			bandeira: "/bandeiras/Flag_of_Japan.png",
		},
		{
			id: 5,
			serie: "6º ANO",
			turma: "E",
			pais: "CHINA",
			bandeira: "/bandeiras/Flag_of_China.png",
		},
		{
			id: 6,
			serie: "7º ANO",
			turma: "A",
			pais: "FRANÇA",
			bandeira: "/bandeiras/Flag_of_France.png",
		},
		{
			id: 7,
			serie: "7º ANO",
			turma: "B",
			pais: "SUÉCIA",
			bandeira: "/bandeiras/Flag_of_Sweden.png",
		},
		{
			id: 8,
			serie: "7º ANO",
			turma: "C",
			pais: "REPUBLICA TCHECA",
			bandeira: "/bandeiras/Flag_of_Czech_Republic.png",
		},
		{
			id: 9,
			serie: "7º ANO",
			turma: "D",
			pais: "UCRÂNIA",
			bandeira: "/bandeiras/Flag_of_Ukraine.png",
		},
		{
			id: 10,
			serie: "7º ANO",
			turma: "E",
			pais: "ESTADOS UNIDOS",
			bandeira: "/bandeiras/Flag_United_States.png",
		},
		{
			id: 10,
			serie: "8º ANO",
			turma: "A",
			pais: "PORTUGAL",
			bandeira: "/bandeiras/Flag_of_Portugal.png",
		},
		{
			id: 11,
			serie: "8º ANO",
			turma: "B",
			pais: "MÉXICO",
			bandeira: "/bandeiras/Flag_of_Mexico.png",
		},
		{
			id: 12,
			serie: "8º ANO",
			turma: "C",
			pais: "ALEMANHA",
			bandeira: "/bandeiras/Flag_of_Germany.png",
		},
		{
			id: 13,
			serie: "8º ANO",
			turma: "D",
			pais: "NORUEGA",
			bandeira: "/bandeiras/Flag_of_Norway.png",
		},
		{
			id: 14,
			serie: "9º ANO",
			turma: "A",
			pais: "ESPANHA",
			bandeira: "/bandeiras/Flag_of_Spain.png",
		},
		{
			id: 15,
			serie: "9º ANO",
			turma: "B",
			pais: "GRÉCIA",
			bandeira: "/bandeiras/Flag_of_Greece.png",
		},
		{
			id: 16,
			serie: "9º ANO",
			turma: "C",
			pais: "ARGENTINA",
			bandeira: "/bandeiras/Flag_of_Argentina.png",
		},
		{
			id: 17,
			serie: "9º ANO",
			turma: "D",
			pais: "AUSTRÁLIA",
			bandeira: "/bandeiras/Flag_of_Australia.png",
		},
		{
			id: 18,
			serie: "1ª SÉRIE",
			turma: "A",
			pais: "IRLANDA",
			bandeira: "/bandeiras/Flag_of_Ireland.png",
		},
		{
			id: 18,
			serie: "1ª SÉRIE",
			turma: "B",
			pais: "ITÁLIA",
			bandeira: "/bandeiras/Flag_of_Italy.png",
		},
		{
			id: 18,
			serie: "1ª SÉRIE",
			turma: "C",
			pais: "INGLATERRA",
			bandeira: "/bandeiras/Flag_of_England.png",
		},
		{
			id: 18,
			serie: "2ª SÉRIE",
			turma: "A",
			pais: "HOLANDA",
			bandeira: "/bandeiras/Flag_of_Netherlands.png",
		},
		{
			id: 18,
			serie: "2ª SÉRIE",
			turma: "B",
			pais: "COLÔMBIA",
			bandeira: "/bandeiras/Flag_of_Colombia.png",
		},
		{
			id: 18,
			serie: "3ª SÉRIE",
			turma: "A",
			pais: "BRASIL",
			bandeira: "/bandeiras/Flag_of_Brazil.png",
		},
	];

	// Agrupando os dados por série
	const groupedTimes = times.reduce((acc, time) => {
		if (!acc[time.serie]) {
			acc[time.serie] = [];
		}
		acc[time.serie].push(time);
		return acc;
	}, {});

	return (
		<div>
			{Object.keys(groupedTimes).map((serie) => (
				<div key={serie}>
					<h2 className="text-2xl font-bold my-4">{serie}S</h2>
					<div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
						{groupedTimes[serie].map((time) => (
							<Card key={time.id} className="md:w-[220px] w-full">
								<CardHeader>
									<CardTitle>
										{time.serie} {time.turma}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col items-center gap-2">
									<Image
										src={time.bandeira}
										width={100}
										height={100}
										alt={`Bandeira do ${time.pais}`}
										className="w-[1200x] h-[65px]"
									/>
									<p className="font-bold">{time.pais}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
