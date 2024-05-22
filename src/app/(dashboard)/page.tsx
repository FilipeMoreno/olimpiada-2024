"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { type JSX, type SVGProps, useState } from "react";

interface JogosProps {
	id: number;
	numeroJogo: number;
	data: string;
	hora: string;
	periodo: string;
	modalidade: string;
	equipeA: string;
	imagemA?: string;
	representanteA: string;
	equipeB: string;
	imagemB?: string;
	representanteB: string;
	placarA: number;
	placarB: number;
	status: string;
	finalizado: boolean;
}

function CalendarIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="graphics-symbol"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}

function TrophyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="graphics-symbol"
		>
			<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
			<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
			<path d="M4 22h16" />
			<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
			<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
			<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
		</svg>
	);
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="graphics-symbol"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}

export default function Home() {
	const [jogos, setJogos] = useState<JogosProps[]>([
		{
			id: 1,
			numeroJogo: 1,
			modalidade: "Futsal Feminino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "6º ANO A",
			representanteA: "Natália",
			equipeB: "6º ANO E",
			representanteB: "Analú",
			placarA: 0,
			placarB: 1,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 2,
			numeroJogo: 1,
			modalidade: "Futsal Masculino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "6º ANO A",
			representanteA: "Gustavo",
			equipeB: "6º ANO C",
			representanteB: "Gabriel",
			placarA: 3,
			placarB: 2,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 3,
			numeroJogo: 8,
			modalidade: "Futsal Feminino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "8º ANO A",
			representanteA: "Myra",
			equipeB: "8º ANO C",
			representanteB: "Mônica",
			placarA: 0,
			placarB: 4,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 4,
			numeroJogo: 15,
			modalidade: "Futsal Masculino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "3ª SÉRIE A",
			representanteA: "Mateus",
			equipeB: "1ª SÉRIE A",
			representanteB: "Nathan",
			placarA: 3,
			placarB: 6,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 5,
			numeroJogo: 14,
			modalidade: "Futsal Feminino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "1ª SÉRIE A",
			representanteA: "Geovana",
			equipeB: "1ª SÉRIE B",
			representanteB: "Mariana",
			placarA: 1,
			placarB: 0,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 6,
			numeroJogo: 16,
			modalidade: "Futsal Masculino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "2ª SÉRIE A",
			representanteA: "Andre",
			equipeB: "2ª SÉRIE B",
			representanteB: "Lucas",
			placarA: 2,
			placarB: 3,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 7,
			numeroJogo: 6,
			modalidade: "Futsal Masculino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "7º ANO A",
			representanteA: "Enzo",
			equipeB: "7º ANO D",
			representanteB: "Nicolas",
			placarA: 3,
			placarB: 1,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 8,
			numeroJogo: 6,
			modalidade: "Futsal Masculino",
			data: "04/07/2022",
			hora: "13:30",
			periodo: "Tarde",
			equipeA: "6º ANO B",
			representanteA: "Miguel",
			equipeB: "6º ANO D",
			representanteB: "Vitor",
			placarA: 2,
			placarB: 4,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 9,
			numeroJogo: 30,
			modalidade: "Futsal Feminino",
			data: "00/00/0000",
			hora: "00:00",
			periodo: "Manhã",
			equipeA: "Time A",
			imagemA: "/bandeiras/Flag_of_Argentina.webp",
			representanteA: "Representante",
			equipeB: "Time B",
			imagemB: "/bandeiras/Flag_of_Spain.png",
			representanteB: "Representante",
			placarA: 2,
			placarB: 2,
			status: "Encerrado",
			finalizado: true,
		},
		{
			id: 10,
			numeroJogo: 100,
			modalidade: "Futsal Masculino",
			data: "00/00/0000",
			hora: "00:00",
			periodo: "Manhã",
			equipeA: "Time A",
			imagemA: "/bandeiras/Flag_of_Brazil.png",
			representanteA: "Representante",
			equipeB: "Time B",
			imagemB: "/bandeiras/Flag_of_Portugal.png",
			representanteB: "Representante",
			placarA: 2,
			placarB: 4,
			status: "Agendado",
			finalizado: false,
		},
	]);

	const jogosManha = jogos.filter((jogo) => jogo.periodo === "Manhã");
	const jogosTarde = jogos.filter((jogo) => jogo.periodo === "Tarde");
	return (
		<div className="flex flex-col w-full">
			<main className="flex flex-1 flex-col gap-4 p-4 w-full">
				<div className="flex flex-col gap-4 w-full">
					{jogosManha.map((jogo) => {
						function determinarVencedor(jogo: JogosProps) {
							if (jogo.finalizado) {
								if (jogo.placarA > jogo.placarB) {
									return "equipeA";
								}
								if (jogo.placarA < jogo.placarB) {
									return "equipeB";
								}
							}
							return null; // Empate
						}

						return (
							<Card key={jogo.id} className="flex flex-col bg-secondary w-full">
								<CardHeader>
									<CardTitle>
										<div className="flex justify-center items-center gap-2">
											<span>Jogo {jogo.numeroJogo}</span>
											<span>•</span>
											<span>
												{jogo.data} às {jogo.hora}
											</span>
										</div>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div
										className={`flex flex-row justify-center items-center gap-2 ${
											jogo.finalizado ? "font-normal" : "font-bold"
										}`}
									>
										<div
											className={`flex justify-between items-center gap-2 ${
												determinarVencedor(jogo) === "equipeA"
													? "text-green-500 font-bold"
													: ""
											}`}
										>
											<span className="flex flex-row gap-2">
												<Image
													src={jogo.imagemA || "/bandeiras/sem_foto.png"}
													alt={`Bandeira do ${jogo.equipeA}`}
													width={32}
													height={32}
													className="rounded-md"
												/>
												{jogo.equipeA} ({jogo.representanteA})
											</span>

											{jogo.finalizado && (
												<span className="font-bold text-4xl">
													{jogo.placarA}
												</span>
											)}
										</div>
										<span>x</span>
										<div
											className={`flex justify-between items-center gap-2 ${
												determinarVencedor(jogo) === "equipeB"
													? "text-green-500 font-bold"
													: ""
											}`}
										>
											{jogo.finalizado && (
												<span className="font-bold text-4xl">
													{jogo.placarB}
												</span>
											)}

											<span className="flex flex-row gap-2">
												{jogo.equipeB} ({jogo.representanteB}){" "}
												<Image
													src={jogo.imagemB || "/bandeiras/sem_foto.png"}
													alt={`Bandeira do ${jogo.equipeB}`}
													width={32}
													height={32}
													className="rounded-md"
												/>
											</span>
										</div>
									</div>
								</CardContent>
								<CardFooter className="flex justify-center gap-4">
									<Badge
										className={
											jogo.finalizado ? "bg-green-500" : "bg-yellow-500"
										}
									>
										{jogo.status}
									</Badge>
									<div>
										<Badge
											className={
												(jogo.modalidade === "Futsal Feminino" &&
													"bg-pink-400") ||
												"bg-blue-400"
											}
										>
											{jogo.modalidade}
										</Badge>
									</div>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			</main>
		</div>
	);
}
