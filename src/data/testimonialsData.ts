import image1 from "../assets/img/t-image1.png";
import image2 from "../assets/img/t-image2.jpg";
import image3 from "../assets/img/t-image3.jpg";

interface Testimonial {
    image: string;
    review: string;
    name: string;
    status: string;
}

export const testimonialsData: Testimonial[] = [
    {
        image: image1,
        review: "Eu fiz a escolha certa ao escolher a Fitclub e ao selecionar o plano e programa adequados, pois já alcancei o meu corpo ideal!",
        name: 'mathew hendrickson',
        status : 'empreendedor'
    },
    {
        image: image2,
        review: 'Trabalho na FitClub e posso afirmar com total certeza que é um espaço maravilhoso para quem busca ter mais saúde e cuidar do corpo, independente se é homem ou mulher!',
        name: 'john kevin',
        status: 'treinador'
    },
    {
        image : image3,
        review:'Frequento a FitClub a 2 anos, assinei o plano premium e desde então tive um resultado muito satisfatório, além das minhas expectativas.',
        name: 'franklin',
        status: "cliente"
    }
];