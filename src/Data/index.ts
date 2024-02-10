import { camarao, carne, picanha, maracuja, tapereba, caju, acerola, goiaba, abacaxi, limonada, detox, heineken, budweiser, corona, ice, skol600ml, budweiser600ml, fileComFritas, iscaDePeixe, iscaDeFrango, camaraoRosaEmpanado, camaraoCrocante, camaraoRosaAlhoOleo, carneDeSolComMacaxeira, chapaMista, tabuaDeFrio, calabresaAcebolada, batataFrita, macaxeiraFrita, pePeixeEmpanado, pePeixeNaChapa, peFrangoNaChapa, peFrangoEmpanado, peBifeAcebolado, peBifeComFritas, peCharque, peCarneDeSol, peSaladaDeCamarao, peToscanaNaChapa, peCalabresaNaChapa, pfcamaraoRosaAoMolhoBranco, pfPicanha, pfChapaMista, pfFileComFritas, pfFileAoMolhoMadeira, pfPeixeEmpanado, lasanhaDeCarne, lasanhaDeFrango, espagueteCamaraoRosa, macarrao, arroz, farofa, feijao, baiaoDeDois, acai, salada, saladaDeCamaraoPocao, caipirinha, caipirosca, frozen, ginTropical, daiquiri, dryMartini, cubaLibre, pinaColada, negrone, agua, refrigeranteLata, refrigerante1Litro, energetico, pfPeixeAoMolhoBranco, pfPeixeAParmegiana, pfBifeAParmegiana } from '../../src/assets/index'

export type FoodType = Record<FoodCategory, FoodItem[]>

export type FoodCategory = 'Entrada' | 'Pratos Executivos' | 'Pratos Família (Serve 3 Pessoas)' | 'Massa' | 'Adicionais' | 'Sucos' | 'Lonk Necks' | 'Drinks' | 'Bebida' 
// | 'Hamburguer' | 'Combos' | 'Adicionais de Hamburger'


export interface FoodItem {
    name: string;
    description: string;
    price: number;
    img: string;
}

export const typeList: FoodType = {
    Entrada: [
        {
            name: 'Isca de Filé c/Fritas',
            description: '',
            price: 40,
            img: fileComFritas
        },
        {
            name: 'Isca de Peixe',
            description: '',
            price: 30,
            img: iscaDePeixe
        },
        {
            name: 'Isca de Frango',
            description: '',
            price: 25,
            img: iscaDeFrango
        },
        {
            name: 'Camarão no Bafo',
            description: '',
            price: 40,
            img: camarao
        },
        {
            name: 'Camarão Rosa Empanado',
            description: '',
            price: 65,
            img: camaraoRosaEmpanado
        },
        {
            name: 'Camarão Crocante',
            description: '',
            price: 75,
            img: camaraoCrocante
        },
        {
            name: 'Camarão Rosa no Alho e Óleo',
            description: '',
            price: 60,
            img: camaraoRosaAlhoOleo
        },
        {
            name: 'Carne de Sol c/Macaxeira',
            description: '',
            price: 40,
            img: carneDeSolComMacaxeira
        },
        {
            name: 'Chapa Mista c/Macaxeira',
            description: '',
            price: 40,
            img: chapaMista
        },
        {
            name: 'Tábua de Frios',
            description: '',
            price: 45,
            img: tabuaDeFrio
        },
        {
            name: 'Calabresa Acebolada',
            description: '',
            price: 20,
            img: calabresaAcebolada
        },
        {
            name: 'Batata Frita',
            description: '',
            price: 15,
            img: batataFrita
        },
        {
            name: 'Macaxeira Frita',
            description: '',
            price: 15,
            img: macaxeiraFrita
        }
    ],
    'Pratos Executivos': [
        {
            name: 'Peixe Empanado',
            description: 'Arroz, feijão, farofa, salada.',
            price: 30,
            img: pePeixeEmpanado
        },
        {
            name: 'Peixe na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 30,
            img: pePeixeNaChapa
        },
        {
            name: 'Frango na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 25,
            img: peFrangoNaChapa
        },
        {
            name: 'Frango Empanado',
            description: 'Arroz, feijão, farofa, salada.',
            price: 25,
            img: peFrangoEmpanado
        },
        {
            name: 'Bife Acebolado',
            description: 'Arroz, feijão, farofa, salada.',
            price: 30,
            img: peBifeAcebolado
        },
        {
            name: 'Bife Com fritas',
            description: 'Arroz, feijão, batata frita, farofa, salada.',
            price: 32,
            img: peBifeComFritas
        },
        {
            name: 'Bife a Cavalo',
            description: 'Arroz, feijão, batata frita, farofa, salada, ovo.',
            price: 35,
            img: carne
        },
        {
            name: 'Picanha na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 40,
            img: picanha
        },
        {
            name: 'Charque',
            description: 'Arroz, feijão, farofa, salada.',
            price: 50,
            img: peCharque
        },
        {
            name: 'Mista',
            description: 'Baião, farofa, macaxeira, salada.',
            price: 40,
            img: chapaMista
        },
        {
            name: 'Carne de Sol',
            description: 'Baião, farofa, macaxeira, salada.',
            price: 40,
            img: peCarneDeSol
        },
        {
            name: 'Salada de Camarão',
            description: '',
            price: 40,
            img: peSaladaDeCamarao
        }, 
        {
            name: 'Toscana na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 18,
            img: peToscanaNaChapa
        },
        {
            name: 'Calabresa na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 18,
            img: peCalabresaNaChapa
        }
    ],
    'Pratos Família (Serve 3 Pessoas)': [
        {
            name: 'Camarão Rosa ao Molho Branco',
            description: 'Arroz, batata palha.',
            price: 150,
            img: pfcamaraoRosaAoMolhoBranco
        },
        {
            name: 'Picanha',
            description: 'Arroz, feijão, farofa, salada, vinagrete.',
            price: 120,
            img: pfPicanha
        },
        {
            name: 'Chapa Mista',
            description: 'Arroz, feijão, farofa, salada.',
            price: 100,
            img: pfChapaMista
        },
        {
            name: 'Mista Marajoara',
            description: 'Peixe, frango, charque, calabresa, toscana, picanha, camarão rosa, arroz, farofa, feijão, baião sala, batata.',
            price: 160,
            img: pfChapaMista
        },
        {
            name: 'Filé Com fritas',
            description: 'Arroz, feijão, farofa, salada.',
            price: 100,
            img: pfFileComFritas
        },
        {
            name: 'Filé ao Molho Madeira',
            description: 'Arroz, farofa, batata palha.',
            price: 120,
            img: pfFileAoMolhoMadeira
        },
        {
            name: 'Peixe Empanado',
            description: 'Arroz, feijão, farofa, salada.',
            price: 95,
            img: pfPeixeEmpanado
        },
        {
            name: 'Peixe na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 95,
            img: pePeixeNaChapa
        },
        {
            name: 'Frango Empanado',
            description: 'Arroz, feijão, farofa, salada.',
            price: 80,
            img: peFrangoEmpanado
        },
        {
            name: 'Frango na Chapa',
            description: 'Arroz, feijão, farofa, salada.',
            price: 80,
            img: peFrangoNaChapa
        }, 
        {
            name: 'Carne de Sol',
            description: 'Baião, farofa, macaxeira, vinagrete, salada.',
            price: 110,
            img: carneDeSolComMacaxeira
        },
        {
            name: 'Peixe ao Molho Branco com Camarão Regional',
            description: 'Arroz, farofa, fritas.',
            price: 120,
            img: pfPeixeAoMolhoBranco
        },
        {
            name: 'Peixe ao Molho Branco com Camarão Rosa',
            description: 'Arroz, farofa, fritas.',
            price: 150,
            img: pfPeixeAoMolhoBranco
        },
        {
            name: 'Peixe a Parmegiana',
            description: 'Arroz, farofa, fritas.',
            price: 120,
            img: pfPeixeAParmegiana
        },
        {
            name: 'Bife a Parmegiana',
            description: 'Arroz, farofa, fritas.',
            price: 120,
            img: pfBifeAParmegiana
        },
    ],
    Massa: [
        {
            name: 'Lasanha de Carne(serve 2 pessoas)',
            description: '',
            price: 50,
            img: lasanhaDeCarne
        },
        {
            name: 'Lasanha de Frango(serve 2 pessoas)',
            description: '',
            price: 50,
            img: lasanhaDeFrango
        },
        {
            name: 'Espaguete de Camarão(serve 3 pessoas)',
            description: '',
            price: 160,
            img: espagueteCamaraoRosa
        }
    ],
    Adicionais: [
        {
            name: 'Macarrão',
            description: '',
            price: 6,
            img: macarrao
        },
        {
            name: 'Arroz',
            description: '',
            price: 8,
            img: arroz
        },
        {
            name: 'Farofa',
            description: '',
            price: 6,
            img: farofa
        },
        {
            name: 'Feijão',
            description: '',
            price: 10,
            img: feijao
        },
        {
            name: 'Baião de dois',
            description: '',
            price: 10,
            img: baiaoDeDois
        },
        {
            name: 'Açaí(500ml)',
            description: '',
            price: 15,
            img: acai
        },
        {
            name: 'Salada',
            description: '',
            price: 10,
            img: salada
        },
        {
            name: 'Salada de Camarão',
            description: '',
            price: 10,
            img: saladaDeCamaraoPocao
        }
    ],
    Sucos: [
        {
            name: 'Maracujá',
            description: '',
            price: 12,
            img: maracuja
        },
        {
            name: 'Tapereba',
            description: '',
            price: 10,
            img: tapereba
        },
        {
            name: 'Cajú',
            description: '',
            price: 10,
            img: caju
        },
        {
            name: 'Acerola',
            description: '',
            price: 10,
            img: acerola
        },
        {
            name: 'Goiaba',
            description: '',
            price: 10,
            img: goiaba
        },
        {
            name: 'Abacaxi',
            description: '',
            price: 10,
            img: abacaxi
        },
        {
            name: 'Limonada',
            description: '',
            price: 10,
            img: limonada
        },
        {
            name: 'Detox',
            description: '',
            price: 10,
            img: detox
        }
    ],
    "Lonk Necks": [
        {
            name: 'Heineken',
            description: '',
            price: 11,
            img: heineken
        },
        {
            name: 'Budweiser',
            description: '',
            price: 10,
            img: budweiser
        },
        {
            name: 'Corona',
            description: '',
            price: 11,
            img: corona
        },
        {
            name: 'Ice',
            description: '',
            price: 10,
            img: ice
        },
        {
            name: 'Skol',
            description: 'Garrafa de 600ML.',
            price: 12,
            img: skol600ml
        },
        {
            name: 'Budweiser',
            description: 'Garrafa de 600ML.',
            price: 14,
            img: budweiser600ml
        },
        {
            name: 'Heineken',
            description: 'Garrafa de 600ML.',
            price: 20,
            img: heineken
        }
    ],
    Drinks: [
        {
            name: 'Caipirinha',
            description: '',
            price: 12,
            img: caipirinha
        },
        {
            name: 'Caipirosca',
            description: '',
            price: 14,
            img: caipirosca
        },
        {
            name: 'Frozen',
            description: '',
            price: 15,
            img: frozen
        },
        {
            name: 'Gin Tropical',
            description: '',
            price: 15,
            img: ginTropical
        },
        {
            name: 'Daiquiri',
            description: '',
            price: 15,
            img: daiquiri
        },
        {
            name: 'Dry Martini',
            description: '',
            price: 15,
            img: dryMartini
        },
        {
            name: 'Cuba Libre',
            description: '',
            price: 15,
            img: cubaLibre
        },
        {
            name: 'Piná Colada',
            description: '',
            price: 15,
            img: pinaColada
        },
        {
            name: 'Negrone',
            description: '',
            price: 15,
            img: negrone
        }
    ],
    Bebida: [
        {
            name: 'Água',
            description: '',
            price: 3,
            img: agua
        },
        {
            name: 'Refrigerante Lata',
            description: '',
            price: 5,
            img: refrigeranteLata
        },
        {
            name: 'Refrigerante 1LT',
            description: '',
            price: 10,
            img: refrigerante1Litro
        },
        {
            name: 'Energético',
            description: '',
            price: 15,
            img: energetico
        }
    ],
    // Hamburguer: [
    //     {
    //         name: 'Biciata',
    //         description: 'Pão, carne 120g, cebola caramelizada, alface, queijo e molho.',
    //         price: 15,
    //         img: ''
    //     },
    //     {
    //         name: 'Cajuúna',
    //         description: 'Pão, carne 120g, cebola caramelizada, alface, queijo, molho barbecue + molho.',
    //         price: 17,
    //         img: ''
    //     },
    //     {
    //         name: 'Boto',
    //         description: 'Pão, carne 120g, cebola caramelizada, alface, calabresa e queijo',
    //         price: 20,
    //         img: ''
    //     },
    //     {
    //         name: 'Pororoca',
    //         description: 'Pão, carne 120g, cebola caramelizada, alface, bacon, queijo e Molho',
    //         price: 25,
    //         img: ''
    //     },
    //     {
    //         name: 'Festicam',
    //         description: 'Pão, 2 carne 120g, cebola caramelizada, alface, 2 calabresa, 2 bacon e queijo',
    //         price: 30,
    //         img: ''
    //     },
    // ],
    // Combos: [
    //     {
    //         name: 'Combo Beiradão',
    //         description: '4 Hambúrgueres, batata com calabresa, molho, 1 refrigerante 1L',
    //         price: 100,
    //         img: ''
    //     } ,
    //     {
    //         name: 'Combo Independente',
    //         description: '3 Hambúrgueres, batata com calabresa, molho, 1 refrigerante 1L',
    //         price: 90,
    //         img: ''
    //     },
    //     {
    //         name: 'Combo Baranda',
    //         description: '2 Hambúrgueres, batata com calabresa, molho, 2 refrigerante Lata Tuchaua',
    //         price: 70,
    //         img: ''
    //     },
    //     {
    //         name: 'Combo Beiradão',
    //         description: '1 Hambúrgueres, 1 porção batata, 1 refrigerante em lata',
    //         price: 30,
    //         img: hamburguer
    //     } 
    // ],
    // "Adicionais de Hamburger": [
    //     {
    //         name: 'Carne 120G',
    //         description: '',
    //         price: 7,
    //         img: ''
    //     },
    //     {
    //         name: 'Carne 150G',
    //         description: '',
    //         price: 10,
    //         img: ''
    //     },
    //     {
    //         name: 'Calabresa',
    //         description: '',
    //         price: 4,
    //         img: ''
    //     },
    //     {
    //         name: 'Bacon',
    //         description: '',
    //         price: 6,
    //         img: ''
    //     },
    //     {
    //         name: 'Ovo',
    //         description: '',
    //         price: 2.50,
    //         img: ''
    //     },
    //     {
    //         name: 'Salada',
    //         description: 'Tomate, pepino, cebola',
    //         price: 6,
    //         img: ''
    //     },
    //     {
    //         name: 'Batata Frita',
    //         description: '',
    //         price: 15,
    //         img: ''
    //     },
    //     {
    //         name: 'Batata Bistrô',
    //         description: '',
    //         price: 25,
    //         img: ''
    //     } 
    // ]

}







