"use client";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface JogosProps {
	id: number;
	numeroJogo: number;
	data: string;
	hora: string;
	periodo: string;
	modalidade: string;
	equipeA: string;
	representanteA: string;
	equipeB: string;
	representanteB: string;
	placarA?: number | null;
	placarB?: number | null;
	status: string;
	finalizado: boolean;
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
	]);

	const jogosManha = jogos.filter((jogo) => jogo.periodo === "Manhã");
	const jogosTarde = jogos.filter((jogo) => jogo.periodo === "Tarde");
	return (
		<main className="flex flex-col p-12 gap-4">
			<div className="flex flex-col items-center">
				<img
					src="http://colegiosantoinacio.com.br/img/logo.png"
					alt="Logo"
					className="w-[250px] h-[50px]"
				/>
				<h1 className="text-xl font-bold p-4">
					Programação da XXXIX Olimpíada Interna
				</h1>
			</div>
			<div className="flex items-center justify-center">
				<Tabs
					defaultValue="segunda"
					className="w-full items-center justify-center flex flex-col"
				>
					<TabsList>
						<TabsTrigger value="segunda" className="w-[250px]">
							Segunda
						</TabsTrigger>
						<TabsTrigger value="terca" className="w-[250px]">
							Terça
						</TabsTrigger>
						<TabsTrigger value="quarta" className="w-[250px]">
							Quarta
						</TabsTrigger>
						<TabsTrigger value="quinta" className="w-[250px]">
							Quinta
						</TabsTrigger>
						<TabsTrigger value="sexta" className="w-[250px]">
							Sexta
						</TabsTrigger>
					</TabsList>
					<TabsContent value="segunda">
						<div className="flex flex-row flex-wrap gap-4 my-4">
							{jogosManha.map((jogo) => (
								<Card key={jogo.id} className="w-[300px] bg-secondary">
									<CardHeader>
										<CardTitle>
											<div className="flex justify-between">
												<span>Jogo {jogo.numeroJogo}</span>
												<span>
													{jogo.data} às {jogo.hora}
												</span>
											</div>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col font-bold gap-2">
											<div className="flex justify-between">
												<span>
													{jogo.equipeA} ({jogo.representanteA})
												</span>
												<span>{jogo?.placarA}</span>
											</div>
											<div className="flex justify-between">
												<span>
													{jogo.equipeB} ({jogo.representanteB})
												</span>
												<span>{jogo?.placarB}</span>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										<Badge
											className={
												jogo.finalizado ? "bg-green-500" : "bg-yellow-500"
											}
										>
											{jogo.status}
										</Badge>
									</CardFooter>
								</Card>
							))}
						</div>
						<Separator className="my-4" />
						<div className="flex flex-row flex-wrap gap-4">
							{jogosTarde.map((jogo) => (
								<Card key={jogo.id} className="w-[300px] bg-secondary">
									<CardHeader>
										<CardTitle>
											<div className="flex justify-between">
												<span>Jogo {jogo.numeroJogo}</span>
												<span>
													{jogo.data} às {jogo.hora}
												</span>
											</div>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col font-bold gap-2">
											<div className="flex justify-between">
												<span>
													{jogo.equipeA} ({jogo.representanteA})
												</span>
												<span>{jogo?.placarA}</span>
											</div>
											<div className="flex justify-between">
												<span>
													{jogo.equipeB} ({jogo.representanteB})
												</span>
												<span>{jogo?.placarB}</span>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										<Badge
											className={
												jogo.finalizado ? "bg-green-500" : "bg-yellow-500"
											}
										>
											{jogo.status}
										</Badge>
									</CardFooter>
								</Card>
							))}
						</div>
					</TabsContent>
					<TabsContent value="terca">Terça-Feira</TabsContent>
					<TabsContent value="quarta">Quarta-Feira</TabsContent>
					<TabsContent value="quinta">Quinta-Feira</TabsContent>
					<TabsContent value="sexta">Sexta-Feira</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
