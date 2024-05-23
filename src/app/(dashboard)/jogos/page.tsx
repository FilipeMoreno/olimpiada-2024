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
import { MdBlock } from "react-icons/md";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

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

export default function JogosIndex() {
	const liberado = true;
	const [periodo, setPeriodo] = useState("Manhã");
	const [dia, setDia] = useState("Segunda");
	const searchParams = useSearchParams();

	useEffect(() => {
		const diaParam = searchParams.get("dia");
		if (diaParam) {
			if (diaParam === "segunda") setDia("Segunda-Feira");
			if (diaParam === "terca") setDia("Terça-Feira");
			if (diaParam === "quarta") setDia("Quarta-Feira");
			if (diaParam === "quinta") setDia("Quinta-Feira");
			if (diaParam === "sexta") setDia("Sexta-Feira");
		}
	}, [searchParams]);

	const [jogos, setJogos] = useState<JogosProps[]>([
		{
			id: 1,
			numeroJogo: 1,
			modalidade: "Futsal Feminino",
			data: "04/07/2022",
			hora: "07:30",
			periodo: "Manhã",
			equipeA: "6º ANO A",
			imagemA: "/bandeiras/Flag_of_Turkey.png",
			representanteA: "Natália",
			equipeB: "6º ANO E",
			imagemB: "/bandeiras/Flag_of_China.png",
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
			imagemA: "/bandeiras/Flag_of_Turkey.png",
			representanteA: "Gustavo",
			equipeB: "6º ANO C",
			imagemB: "/bandeiras/Flag_of_Poland.png",
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
			imagemA: "/bandeiras/Flag_of_Portugal.png",
			representanteA: "Myra",
			equipeB: "8º ANO C",
			imagemB: "/bandeiras/Flag_of_Germany.png",
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
			imagemA: "/bandeiras/Flag_of_Brazil.png",
			representanteA: "Mateus",
			equipeB: "1ª SÉRIE A",
			imagemB: "/bandeiras/Flag_of_Ireland.png",
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
			imagemA: "/bandeiras/Flag_of_Ireland.png",
			representanteA: "Geovana",
			equipeB: "1ª SÉRIE B",
			imagemB: "/bandeiras/Flag_of_Italy.png",
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
			imagemA: "/bandeiras/Flag_of_Netherlands.png",
			representanteA: "Andre",
			equipeB: "2ª SÉRIE B",
			imagemB: "/bandeiras/Flag_of_Colombia.png",
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
			imagemA: "/bandeiras/Flag_of_France.png",
			representanteA: "Enzo",
			equipeB: "7º ANO D",
			imagemB: "/bandeiras/Flag_of_Ukraine.png",
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
			representanteA: "Representante",
			equipeB: "Time B",
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
			representanteA: "Representante",
			equipeB: "Time B",
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
		<Suspense>
			<div className="flex flex-col w-full">
				<h1 className="text-center font-bold text-4xl uppercase my-2">{dia}</h1>
				<Tabs defaultValue={periodo} className="w-full my-2">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="Manhã">Manhã</TabsTrigger>
						<TabsTrigger value="Tarde">Tarde</TabsTrigger>
					</TabsList>
					<TabsContent value="Manhã">
						<p>Manhã</p>
					</TabsContent>
					<TabsContent value="Tarde">
						<p>Tarde</p>
					</TabsContent>
				</Tabs>
				{liberado && (
					<main className="flex flex-1 flex-col gap-4 w-full">
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
									return "empate";
								}

								return (
									<Card
										key={jogo.id}
										className="flex flex-col bg-secondary w-full"
									>
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
												<div className="flex justify-between items-center gap-2">
													<span className="text-center flex flex-col lg:flex-row justify-center items-center gap-2">
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
														<span
															className={`font-bold text-4xl ${
																determinarVencedor(jogo) === "empate"
																	? "text-yellow-500 font-bold"
																	: determinarVencedor(jogo) === "equipeA"
																		? "text-green-500 font-bold"
																		: "text-red-500 font-bold"
															}`}
														>
															{jogo.placarA}
														</span>
													)}
												</div>
												<span>x</span>
												<div className="flex justify-between items-center gap-2">
													{jogo.finalizado && (
														<span
															className={`font-bold text-4xl ${
																determinarVencedor(jogo) === "empate"
																	? "text-yellow-500 font-bold"
																	: determinarVencedor(jogo) === "equipeB"
																		? "text-green-500 font-bold"
																		: "text-red-500 font-bold"
															}`}
														>
															{jogo.placarB}
														</span>
													)}
													<span className="text-center flex lg:hidden flex-col lg:flex-row justify-center items-center gap-2">
														<Image
															src={jogo.imagemB || "/bandeiras/sem_foto.png"}
															alt={`Bandeira do ${jogo.equipeB}`}
															width={32}
															height={32}
															className="rounded-md"
														/>
														{jogo.equipeB} ({jogo.representanteB})
													</span>

													<span className="hidden lg:flex gap-2">
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
				)}
				{!liberado && (
					<div className="flex flex-col w-full items-center justify-center bg-secondary p-4 rounded-lg gap-3">
						<MdBlock className="text-red-500" size={50} />
						<h1 className="text-2xl font-bold">ainda não existem jogos</h1>
					</div>
				)}
			</div>
		</Suspense>
	);
}
