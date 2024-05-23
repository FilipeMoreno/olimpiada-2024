import { CalendarClock, Flag, Trophy } from "lucide-react";

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: any;
	submenus: Submenu[];
};

type Group = {
	groupLabel: string;
	menus: Menu[];
};

export function getPages(pathname: string): Group[] {
	return [
		// {
		// 	groupLabel: "",
		// 	menus: [
		// 		{
		// 			href: "/dashboard",
		// 			label: "Dashboard",
		// 			active: pathname.includes("/dashboard"),
		// 			icon: LayoutGrid,
		// 			submenus: [],
		// 		},
		// 	],
		// },
		{
			groupLabel: "",
			menus: [
				{
					href: "/jogos",
					label: "Jogos",
					active: pathname.includes("/jogos"),
					icon: CalendarClock,
					submenus: [
						{
							href: "/jogos?dia=segunda",
							label: "Segunda-Feira",
							active: pathname === "/jogos?dia=segunda",
						},
						{
							href: "/jogos?dia=terca",
							label: "Terça-Feira",
							active: pathname === "/jogos?dia=terca",
						},
						{
							href: "/jogos?dia=quarta",
							label: "Quarta-Feira",
							active: pathname === "/jogos?dia=quarta",
						},
						{
							href: "/jogos?dia=quinta",
							label: "Quinta-Feira",
							active: pathname === "/jogos?dia=quinta",
						},
						{
							href: "/jogos?dia=sexta",
							label: "Sexta-Feira",
							active: pathname === "/jogos?dia=sexta",
						},
					],
				},
				{
					href: "/times",
					label: "Times",
					active: pathname.includes("/times"),
					icon: Flag,
					submenus: [],
				},
				{
					href: "/campeoes",
					label: "Campeões",
					active: pathname.includes("/campeoes"),
					icon: Trophy,
					submenus: [],
				},
			],
		},
		// {
		// 	groupLabel: "Settings",
		// 	menus: [
		// 		{
		// 			href: "/users",
		// 			label: "Users",
		// 			active: pathname.includes("/users"),
		// 			icon: Users,
		// 			submenus: [],
		// 		},
		// 		{
		// 			href: "/account",
		// 			label: "Account",
		// 			active: pathname.includes("/account"),
		// 			icon: Settings,
		// 			submenus: [],
		// 		},
		// 	],
		// },
	];
}
