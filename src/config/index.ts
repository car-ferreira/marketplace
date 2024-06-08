export const PRODUCT_CATEGORIES = [
    {
        label: "Todos os Produtos",
        value: "todosProdutos" as const,
        featured: [
            {
                name: "Mais Indicados",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "Principais Novidades",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Mais vendidos",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Exclusivos SOLDOUT",
        value: "produtosExclusivos" as const,
        featured: [
            {
                name: "Ofertas Especiais",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "Novidades",
                href: "#",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Mais vendidos",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
]