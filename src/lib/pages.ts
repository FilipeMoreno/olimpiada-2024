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
					href: "",
					label: "Jogos",
					active: pathname.includes("/#"),
					icon: CalendarClock,
					submenus: [
						{
							href: "/?jogos=segunda",
							label: "Segunda-Feira",
							active: pathname === "/?jogos=segunda",
						},
						{
							href: "/?jogos=terca",
							label: "Terça-Feira",
							active: pathname === "/?jogos=terca",
						},
						{
							href: "/?jogos=quarta",
							label: "Quarta-Feira",
							active: pathname === "/?jogos=quarta",
						},
						{
							href: "/?jogos=quinta",
							label: "Quinta-Feira",
							active: pathname === "/?jogos=quinta",
						},
						{
							href: "/?jogos=sexta",
							label: "Sexta-Feira",
							active: pathname === "/?jogos=sexta",
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
