interface MenuItem {
    name: string;
    href: string;
}

export const menuItems: MenuItem[] = [
    {
        name: "Inicio",
        href: "/"
    },
    {
        name: "Sobre Nosotros",
        href: "/sobre-nosotros"
    },
    {
        name: "Eventos",
        href: "/eventos"
    },
    {
        name: "Proyectos",
        href: "/proyectos"
    }
]