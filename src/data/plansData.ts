interface InfoPlan {
    name: string;
    price: string;
    features: string[];
}

interface Plans {
    basic: InfoPlan;
    premium: InfoPlan;
    pro: InfoPlan;
}

export const plans: Plans = {
    basic: {
        name: 'plano básico',
        price:'$ 25',
        features: [
            '2 horas de exercícios',
            'consulta gratuita de treinadores',
            'acesso à comunidade',
        ],
    },
    
    premium: {
        name: 'plano premium',
        price:'$ 30',
        features: [
            '5 horas de exercícios',
            'consulta gratuita de treinadores',
            'acesso ao frigobar',
        ],
    },

    pro: {
        name: 'plano pro',
        price:'$ 45',
        features: [
            '8 horas de exercícios',
            'consulta privada de coaching',
            'produtos de fitness gratuitos',
        ],
    },
}