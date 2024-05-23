"use client";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { useState } from "react";
import { FaMedal, FaTrophy } from "react-icons/fa";

interface Campeao {
	posicao: number;
	pais: string;
	bandeira: string;
	serie?: string;
	turma?: string;
	representante?: string;
}

interface CampeoesPorModalidade {
	Futsal: Campeao[];
	Vôlei: Campeao[];
	Handebol: Campeao[];
	Basquete: Campeao[];
}

interface CampeoesPorTurma {
	[turma: string]: CampeoesPorModalidade;
}

export default function CampeoesIndex() {
	const campeoes = {
		"6º ANOS": {
			Futsal: [
				{
					posicao: 1,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
				// {
				// 	posicao: 2,
				// 	pais: "BRASIL",
				// 	bandeira: "/bandeiras/Flag_of_Brazil.png",
				// 	serie: "6º ANO",
				// 	turma: "A",
				// 	representante: "Aluno",
				// },
				// {
				// 	posicao: 3,
				// 	pais: "BRASIL",
				// 	bandeira: "/bandeiras/Flag_of_Brazil.png",
				// 	serie: "6º ANO",
				// 	turma: "A",
				// 	representante: "Aluno",
				// },
			],
			Vôlei: [
				{
					posicao: 2,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
			],
			Handebol: [
				{
					posicao: 3,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
			],
			Basquete: [],
		},
		"7º ANOS": {
			Futsal: [
				{
					posicao: 1,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Beltrano",
				},
				{
					posicao: 2,
					pais: "ESPANHA",
					bandeira: "/bandeiras/Flag_of_Spain.png",
					serie: "6º ANO",
					turma: "B",
					representante: "Fulano",
				},
				{
					posicao: 3,
					pais: "PORTUGAL",
					bandeira: "/bandeiras/Flag_of_Portugal.png",
					serie: "6º ANO",
					turma: "C",
					representante: "Ciclano",
				},
			],
			Vôlei: [],
			Handebol: [],
			Basquete: [],
		},
		"8º ANOS": {
			Futsal: [],
			Vôlei: [],
			Handebol: [],
			Basquete: [],
		},
		"9º ANOS": {
			Futsal: [],
			Vôlei: [],
			Handebol: [],
			Basquete: [],
		},
		"Ensino Médio": {
			Futsal: [],
			Vôlei: [],
			Handebol: [],
			Basquete: [],
		},
	};

	const [selectedTurma, setSelectedTurma] = useState<string>("6º ANOS");

	const handleTurmaChange = (value: string) => {
		setSelectedTurma(value);
	};

	const PodioCard = ({
		posicao,
		pais,
		bandeira,
		serie,
		turma,
		representante,
	}: {
		posicao: number;
		pais: string;
		bandeira: string;
		serie?: string;
		turma?: string;
		representante?: string;
	}) => {
		return (
			<>
				{posicao && (
					<div
						key={posicao}
						className="flex flex-col items-center justify-center gap-1 mx-3"
					>
						{posicao === 1 ? (
							<FaTrophy className="text-yellow-500" size={24} />
						) : (
							<FaMedal
								className={`${
									posicao === 2 ? "text-gray-400" : "text-yellow-700"
								}`}
								size={24}
							/>
						)}
						<span className="font-bold">{posicao}º</span>
						{posicao === 1 ? (
							<Image
								src={bandeira}
								width={150}
								height={100}
								alt={`Bandeira do ${pais}`}
								className="rounded-lg"
							/>
						) : (
							<Image
								src={bandeira ?? "/bandeiras/sem_foto.png"}
								width={100}
								height={100}
								alt={`Bandeira do ${pais}`}
								className="rounded-lg"
							/>
						)}
						<div className="flex flex-col items-center justify-center">
							<span className="font-bold">
								{serie ?? "Aguar"} {turma ?? ""}
							</span>
							<span>({representante ?? "Não definido"})</span>
						</div>
					</div>
				)}
			</>
		);
	};

	const ModalidadePodio = ({
		modalidade,
		campeoes,
	}: { modalidade: string; campeoes: Campeao[] }) => {
		return (
			<div className="flex flex-col justify-center items-center my-4 bg-secondary w-full h-full rounded-lg g p-4">
				<h2 className="text-xl font-bold text-center uppercase bg-zinc-900 p-1 rounded-t-lg w-full">
					{modalidade}
				</h2>
				<div className="flex flex-col items-center justify-center border-2 border-zinc-900 w-full p-2">
					{(campeoes.length !== 0 && (
						<div className="flex flex-row">
							<PodioCard {...campeoes[1]} />

							<PodioCard {...campeoes[0]} />

							<PodioCard {...campeoes[2]} />
						</div>
					)) || (
						<div>
							<h1>Ainda não há campeões nesta modalidade</h1>
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="mb-4 flex flex-row items-center">
				<label htmlFor="turma" className="mr-2">
					Selecione a Turma:
				</label>
				<Select onValueChange={handleTurmaChange}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Selecione a turma" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Turmas</SelectLabel>
							{Object.keys(campeoes).map((turma) => (
								<SelectItem key={turma} value={turma}>
									{turma}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="text-center uppercase font-bold text-xl">
				{selectedTurma}
			</div>
			{Object.entries(campeoes[selectedTurma as keyof typeof campeoes]).map(
				([modalidade, campeoesPorModalidade]) => {
					return (
						<ModalidadePodio
							key={modalidade}
							modalidade={modalidade}
							campeoes={campeoesPorModalidade as Campeao[]}
						/>
					);
				},
			)}
		</div>
	);
}
