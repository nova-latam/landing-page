export interface MenuItem {
    name: string;
    href: string;
}

export const menuItems: MenuItem[] = [
    {
        name: "Sobre Nova",
        href: "/sobre-nosotros"
    },
    {
        name: "Eventos",
        href: "/eventos"
    },
    {
        name: "Proyectos",
        href: "/proyectos"
    },
    {
        name: "Recursos",
        href: "/recursos"
    }
]