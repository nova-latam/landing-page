type Event = {
    name: string
    link: string
    cover: string
    description: string
    reach: string
}

export const trascendiendoFronteras: Event = {
    name: "Trascendiendo Fronteras",
    link: "/trascendiendo-fronteras",
    cover: "/images/events/2023/trascendiendo-fronteras.png",
    description: "Trascendiendo Fronteras",
    reach: "1000",
}

export const networkingWithExperts: Event = {
    name: "Networking with Experts",
    link: "",
    cover: "/images/events/2023/networking-with-experts.png",
    description: "Networking with Experts",
    reach: "1000",
}

export const sinergiaIII: Event = {
    name: "Sinergia III",
    link: "https://www.epn.edu.ec/epn-sinergia-iii/",
    cover: "/images/events/2023/sinergia-iii.jpeg",
    description: "Sinergia III",
    reach: "1000",
}

export const blockchainWeek: Event = {
    name: "Blockchain Week",
    link: "https://www.epn.edu.ec/road-to-blockchain-week-2023/",
    cover: "/images/events/2023/blockchain-week.jpeg",
    description: "Blockchain Week",
    reach: "1000",
}

export const enterprisesEcosystem: Event = {
    name: "Ecosistema Empresas",
    link: "https://www.epn.edu.ec/ecosistema-empresas-fis-2023/",
    cover: "/images/events/2023/ecosistema-empresas.jpeg",
    description: "Un espacio para promover la transferencia de tecnología, la creación de empleo y el crecimiento económico",
    reach: "1000",
}

export const eventsData: Event[] = [
    trascendiendoFronteras,
    networkingWithExperts,
    sinergiaIII,
    blockchainWeek,
    enterprisesEcosystem
]