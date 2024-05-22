"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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

export default function CampeoesIndex() {
	const campeoes = {
		"6º ANO": {
			Futsal: [
				{
					posicao: 1,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
				{
					posicao: 2,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
				{
					posicao: 3,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
					serie: "6º ANO",
					turma: "A",
					representante: "Aluno",
				},
			],
			Vôlei: [
				{
					posicao: 1,
					pais: "ITÁLIA",
					bandeira: "/bandeiras/Flag_of_Italy.png",
				},
				{
					posicao: 2,
					pais: "ALEMANHA",
					bandeira: "/bandeiras/Flag_of_Germany.png",
				},
				{
					posicao: 3,
					pais: "ESTADOS UNIDOS",
					bandeira: "/bandeiras/Flag_United_States.png",
				},
			],
			Handebol: [
				{
					posicao: 1,
					pais: "FRANÇA",
					bandeira: "/bandeiras/Flag_of_France.png",
				},
				{
					posicao: 2,
					pais: "MÉXICO",
					bandeira: "/bandeiras/Flag_of_Mexico.png",
				},
				{
					posicao: 3,
					pais: "NORUEGA",
					bandeira: "/bandeiras/Flag_of_Norway.png",
				},
			],
			Basquete: [
				{
					posicao: 1,
					pais: "ESTADOS UNIDOS",
					bandeira: "/bandeiras/Flag_United_States.png",
				},
				{
					posicao: 2,
					pais: "ESPANHA",
					bandeira: "/bandeiras/Flag_of_Spain.png",
				},
				{
					posicao: 3,
					pais: "ARGENTINA",
					bandeira: "/bandeiras/Flag_of_Argentina.png",
				},
			],
		},
		"7º ANO": {
			Futsal: [
				{
					posicao: 1,
					pais: "BRASIL",
					bandeira: "/bandeiras/Flag_of_Brazil.png",
				},
				{
					posicao: 2,
					pais: "ARGENTINA",
					bandeira: "/bandeiras/Flag_of_Argentina.png",
				},
				{
					posicao: 3,
					pais: "ESPANHA",
					bandeira: "/bandeiras/Flag_of_Spain.png",
				},
			],
			Vôlei: [
				{
					posicao: 1,
					pais: "ITÁLIA",
					bandeira: "/bandeiras/Flag_of_Italy.png",
				},
				{
					posicao: 2,
					pais: "ALEMANHA",
					bandeira: "/bandeiras/Flag_of_Germany.png",
				},
				{
					posicao: 3,
					pais: "ESTADOS UNIDOS",
					bandeira: "/bandeiras/Flag_United_States.png",
				},
			],
			Handebol: [
				{
					posicao: 1,
					pais: "FRANÇA",
					bandeira: "/bandeiras/Flag_of_France.png",
				},
				{
					posicao: 2,
					pais: "MÉXICO",
					bandeira: "/bandeiras/Flag_of_Mexico.png",
				},
				{
					posicao: 3,
					pais: "NORUEGA",
					bandeira: "/bandeiras/Flag_of_Norway.png",
				},
			],
			Basquete: [
				{
					posicao: 1,
					pais: "ESTADOS UNIDOS",
					bandeira: "/bandeiras/Flag_United_States.png",
				},
				{
					posicao: 2,
					pais: "ESPANHA",
					bandeira: "/bandeiras/Flag_of_Spain.png",
				},
				{
					posicao: 3,
					pais: "ARGENTINA",
					bandeira: "/bandeiras/Flag_of_Argentina.png",
				},
			],
		},
	};

	const [selectedTurma, setSelectedTurma] = useState("6º ANO");

	const handleTurmaChange = (value) => {
		setSelectedTurma(value);
	};

	const PodioCard = ({
		posicao,
		pais,
		bandeira,
		serie,
		turma,
		representante,
	}) => (
		<Card
			key={posicao}
			className={`flex flex-col items-center p-4 w-[250px] h-[250px] ${
				posicao === 1 ? "scale-125 z-10" : ""
			}`}
		>
			<CardHeader>
				<CardTitle className="flex items-center space-x-2">
					{posicao === 1 ? (
						<FaTrophy className="text-yellow-500" size={24} />
					) : (
						<FaMedal
							className={`text-${posicao === 2 ? "gray-400" : "yellow-700"}`}
							size={24}
						/>
					)}
					<span>{posicao}º Lugar</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-2">
				<Image
					src={bandeira}
					width={100}
					height={100}
					alt={`Bandeira do ${pais}`}
				/>
				<p className="font-bold">{pais}</p>
				<div className="flex flex-col text-xs items-center justify-center">
					<span className="text-xs">
						{serie} {turma}
					</span>
					<span>({representante})</span>
				</div>
			</CardContent>
		</Card>
	);

	const ModalidadePodio = ({ modalidade, campeoes }) => (
		<div className="mb-8">
			<h2 className="text-2xl font-bold my-12 text-center uppercase">
				{modalidade}
			</h2>
			<div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8">
				<PodioCard {...campeoes[1]} />
				<PodioCard {...campeoes[0]} />
				<PodioCard {...campeoes[2]} />
			</div>
		</div>
	);

	return (
		<div>
			<div className="mb-4 flex flex-row items-center">
				<label htmlFor="turma" className="mr-2">
					Selecione a Turma:
				</label>
				<Select onValueChange={handleTurmaChange}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a turma" />
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
			<h1 className="text-xl text-center font-bold">Pódio</h1>
			<h1 className="text-xl text-center font-bold">{selectedTurma}S</h1>
			{Object.keys(campeoes[selectedTurma]).map((modalidade) => (
				<ModalidadePodio
					key={modalidade}
					modalidade={modalidade}
					campeoes={campeoes[selectedTurma][modalidade]}
				/>
			))}
		</div>
	);
}
