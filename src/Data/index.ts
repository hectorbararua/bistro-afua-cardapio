import { camarao, carne, picanha, maracuja, tapereba, caju, acerola, goiaba, abacaxi, limonada, detox, heineken, budweiser, corona, ice, skol600ml, budweiser600ml, fileComFritas, iscaDePeixe, iscaDeFrango, camaraoRosaEmpanado, camaraoCrocante, camaraoRosaAlhoOleo, carneDeSolComMacaxeira, chapaMista, tabuaDeFrio, calabresaAcebolada, batataFrita, macaxeiraFrita, pePeixeEmpanado, pePeixeNaChapa, peFrangoNaChapa, peFrangoEmpanado, peBifeAcebolado, peBifeComFritas, peCharque, peCarneDeSol, peSaladaDeCamarao, peToscanaNaChapa, peCalabresaNaChapa, pfcamaraoRosaAoMolhoBranco, pfPicanha, pfChapaMista, pfFileComFritas, pfFileAoMolhoMadeira, pfPeixeEmpanado, lasanhaDeCarne, lasanhaDeFrango, espagueteCamaraoRosa, macarrao, arroz, farofa, feijao, baiaoDeDois, acai, salada, saladaDeCamaraoPocao, caipirinha, caipirosca, frozen, ginTropical, daiquiri, dryMartini, cubaLibre, pinaColada, negrone, agua, refrigeranteLata, refrigerante1Litro, energetico, pfPeixeAoMolhoBranco, pfPeixeAParmegiana, pfBifeAParmegiana } from '../../src/assets/index'

export type FoodType = Record<FoodCategory, FoodItem[]>

export type FoodCategory = 'Entrada' | 'Fechaduras Vidro/Vidro' | 'Fechaduras Vidro/Alvenaria' | 'Bate-Fecha' | 'Puxadores' | 'Roldanas' | 'Batedores' | 'Silicone' | 'Outros' 
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
            name: 'Kit Suporte Fixo Inox',
            description: 'Kit completo com 4 suportes para vidro temperado',
            price: 40,
            img: fileComFritas
        },
        {
            name: 'Dobradiça para Vidro',
            description: 'Dobradiça com acabamento cromado',
            price: 30,
            img: iscaDePeixe
        },
        {
            name: 'Perfil de Alumínio',
            description: 'Perfil para acabamento de vidro',
            price: 25,
            img: iscaDeFrango
        },
        {
            name: 'Mola para Porta de Vidro',
            description: 'Mola de piso hidráulica para portas',
            price: 40,
            img: camarao
        },
        {
            name: 'Trinco para Box',
            description: 'Trinco cromado para porta de box',
            price: 65,
            img: camaraoRosaEmpanado
        },
        {
            name: 'Vedação para Box',
            description: 'Kit de vedação para box de banheiro',
            price: 75,
            img: camaraoCrocante
        },
        {
            name: 'Pivô para Porta',
            description: 'Pivô superior e inferior para porta de vidro',
            price: 60,
            img: camaraoRosaAlhoOleo
        },
        {
            name: 'Fechadura para Vitrine',
            description: 'Fechadura completa para vitrine',
            price: 40,
            img: carneDeSolComMacaxeira
        },
        {
            name: 'Puxador Tubular',
            description: 'Puxador tubular 30cm para porta de vidro',
            price: 40,
            img: chapaMista
        },
        {
            name: 'Kit Fixação Espelho',
            description: 'Kit completo para fixação de espelho',
            price: 45,
            img: tabuaDeFrio
        },
        {
            name: 'Cantoneira de Alumínio',
            description: 'Cantoneira para acabamento de vidro',
            price: 20,
            img: calabresaAcebolada
        },
        {
            name: 'Ventosa para Vidro',
            description: 'Ventosa dupla para transporte de vidro',
            price: 15,
            img: batataFrita
        },
        {
            name: 'Espaçador para Vidro',
            description: 'Espaçadores para instalação de vidro',
            price: 15,
            img: macaxeiraFrita
        }
    ],
    'Fechaduras Vidro/Vidro': [
        {
            name: 'Fechadura 1101 Cromada',
            description: 'Fechadura para porta de vidro/vidro',
            price: 130,
            img: pePeixeEmpanado
        },
        {
            name: 'Fechadura 1102 Polida',
            description: 'Fechadura para porta de vidro/vidro com chave',
            price: 130,
            img: pePeixeNaChapa
        },
        {
            name: 'Fechadura 1103 Escovada',
            description: 'Fechadura para porta de vidro/vidro com trinco',
            price: 125,
            img: peFrangoNaChapa
        },
        {
            name: 'Fechadura 1104 Inox',
            description: 'Fechadura premium para porta de vidro/vidro',
            price: 125,
            img: peFrangoEmpanado
        },
        {
            name: 'Fechadura 1105 Dourada',
            description: 'Fechadura com acabamento dourado para vidro/vidro',
            price: 130,
            img: peBifeAcebolado
        },
        {
            name: 'Fechadura 1201 Quadrada',
            description: 'Fechadura quadrada para porta de vidro/vidro',
            price: 132,
            img: peBifeComFritas
        },
        {
            name: 'Fechadura 1202 Redonda',
            description: 'Fechadura redonda para porta de vidro/vidro',
            price: 135,
            img: carne
        },
        {
            name: 'Fechadura 1203 Oval',
            description: 'Fechadura oval para porta de vidro/vidro',
            price: 140,
            img: picanha
        },
        {
            name: 'Fechadura 1204 Mini',
            description: 'Fechadura mini para porta de vidro/vidro',
            price: 150,
            img: peCharque
        },
        {
            name: 'Fechadura 1205 Dupla',
            description: 'Fechadura dupla para porta de vidro/vidro',
            price: 140,
            img: chapaMista
        },
        {
            name: 'Fechadura 1206 Banheiro',
            description: 'Fechadura para porta de banheiro vidro/vidro',
            price: 140,
            img: peCarneDeSol
        },
        {
            name: 'Fechadura 1207 Escritório',
            description: 'Fechadura para porta de escritório vidro/vidro',
            price: 140,
            img: peSaladaDeCamarao
        }, 
        {
            name: 'Fechadura 1208 Alta',
            description: 'Fechadura alta para porta de vidro/vidro',
            price: 118,
            img: peToscanaNaChapa
        },
        {
            name: 'Fechadura 1209 Baixa',
            description: 'Fechadura baixa para porta de vidro/vidro',
            price: 118,
            img: peCalabresaNaChapa
        }
    ],
    'Fechaduras Vidro/Alvenaria': [
        {
            name: 'Fechadura 2101 Cromada',
            description: 'Fechadura para porta de vidro/alvenaria',
            price: 150,
            img: pfcamaraoRosaAoMolhoBranco
        },
        {
            name: 'Fechadura 2102 Polida',
            description: 'Fechadura para porta de vidro/alvenaria com chave',
            price: 120,
            img: pfPicanha
        },
        {
            name: 'Fechadura 2103 Escovada',
            description: 'Fechadura para porta de vidro/alvenaria com trinco',
            price: 100,
            img: pfChapaMista
        },
        {
            name: 'Fechadura 2104 Premium',
            description: 'Fechadura premium para porta de vidro/alvenaria',
            price: 160,
            img: pfChapaMista
        },
        {
            name: 'Fechadura 2201 Quadrada',
            description: 'Fechadura quadrada para porta de vidro/alvenaria',
            price: 100,
            img: pfFileComFritas
        },
        {
            name: 'Fechadura 2202 Redonda',
            description: 'Fechadura redonda para porta de vidro/alvenaria',
            price: 120,
            img: pfFileAoMolhoMadeira
        },
        {
            name: 'Fechadura 2203 Oval',
            description: 'Fechadura oval para porta de vidro/alvenaria',
            price: 95,
            img: pfPeixeEmpanado
        },
        {
            name: 'Fechadura 2204 Mini',
            description: 'Fechadura mini para porta de vidro/alvenaria',
            price: 95,
            img: pePeixeNaChapa
        },
        {
            name: 'Fechadura 2205 Dupla',
            description: 'Fechadura dupla para porta de vidro/alvenaria',
            price: 80,
            img: peFrangoEmpanado
        },
        {
            name: 'Fechadura 2206 Banheiro',
            description: 'Fechadura para porta de banheiro vidro/alvenaria',
            price: 80,
            img: peFrangoNaChapa
        }, 
        {
            name: 'Fechadura 2207 Escritório',
            description: 'Fechadura para porta de escritório vidro/alvenaria',
            price: 110,
            img: carneDeSolComMacaxeira
        },
        {
            name: 'Fechadura 2208 Alta',
            description: 'Fechadura alta para porta de vidro/alvenaria',
            price: 120,
            img: pfPeixeAoMolhoBranco
        },
        {
            name: 'Fechadura 2209 Baixa',
            description: 'Fechadura baixa para porta de vidro/alvenaria',
            price: 150,
            img: pfPeixeAoMolhoBranco
        },
        {
            name: 'Fechadura 2210 Frontal',
            description: 'Fechadura frontal para porta de vidro/alvenaria',
            price: 120,
            img: pfPeixeAParmegiana
        },
        {
            name: 'Fechadura 2211 Lateral',
            description: 'Fechadura lateral para porta de vidro/alvenaria',
            price: 120,
            img: pfBifeAParmegiana
        },
    ],
    'Bate-Fecha': [
        {
            name: 'Bate-Fecha Magnético',
            description: 'Bate-fecha magnético para porta de vidro',
            price: 50,
            img: lasanhaDeCarne
        },
        {
            name: 'Bate-Fecha com Mola',
            description: 'Bate-fecha com mola de pressão',
            price: 50,
            img: lasanhaDeFrango
        },
        {
            name: 'Bate-Fecha Premium',
            description: 'Bate-fecha de alta resistência',
            price: 160,
            img: espagueteCamaraoRosa
        }
    ],
    'Puxadores': [
        {
            name: 'Puxador Tubular 20cm',
            description: 'Puxador tubular 20cm em inox',
            price: 60,
            img: macarrao
        },
        {
            name: 'Puxador Tubular 30cm',
            description: 'Puxador tubular 30cm em inox',
            price: 80,
            img: arroz
        },
        {
            name: 'Puxador Tubular 40cm',
            description: 'Puxador tubular 40cm em inox',
            price: 60,
            img: farofa
        },
        {
            name: 'Puxador H 30cm',
            description: 'Puxador formato H 30cm em inox',
            price: 100,
            img: feijao
        },
        {
            name: 'Puxador H 40cm',
            description: 'Puxador formato H 40cm em inox',
            price: 100,
            img: baiaoDeDois
        },
        {
            name: 'Puxador Quadrado',
            description: 'Puxador quadrado em alumínio',
            price: 150,
            img: acai
        },
        {
            name: 'Puxador Redondo',
            description: 'Puxador redondo em alumínio',
            price: 100,
            img: salada
        },
        {
            name: 'Puxador Decorativo',
            description: 'Puxador decorativo em aço inox',
            price: 100,
            img: saladaDeCamaraoPocao
        }
    ],
    'Roldanas': [
        {
            name: 'Roldana Simples',
            description: 'Roldana simples para porta de correr',
            price: 120,
            img: maracuja
        },
        {
            name: 'Roldana Dupla',
            description: 'Roldana dupla para porta de correr',
            price: 100,
            img: tapereba
        },
        {
            name: 'Roldana Regulável',
            description: 'Roldana com regulagem de altura',
            price: 100,
            img: caju
        },
        {
            name: 'Roldana Superior',
            description: 'Roldana para instalação superior',
            price: 100,
            img: acerola
        },
        {
            name: 'Roldana Inferior',
            description: 'Roldana para instalação inferior',
            price: 100,
            img: goiaba
        },
        {
            name: 'Roldana Aparente',
            description: 'Roldana aparente para porta de correr',
            price: 100,
            img: abacaxi
        },
        {
            name: 'Roldana Embutida',
            description: 'Roldana embutida para porta de correr',
            price: 100,
            img: limonada
        },
        {
            name: 'Kit Roldanas Premium',
            description: 'Kit completo de roldanas para porta de correr',
            price: 100,
            img: detox
        }
    ],
    'Batedores': [
        {
            name: 'Batedor de Porta Simples',
            description: 'Batedor simples para porta de vidro',
            price: 110,
            img: heineken
        },
        {
            name: 'Batedor de Porta Duplo',
            description: 'Batedor duplo para porta de vidro',
            price: 100,
            img: budweiser
        },
        {
            name: 'Batedor de Parede',
            description: 'Batedor para fixar na parede',
            price: 110,
            img: corona
        },
        {
            name: 'Batedor de Piso',
            description: 'Batedor para fixar no piso',
            price: 100,
            img: ice
        },
        {
            name: 'Batedor Magnético',
            description: 'Batedor com imã para porta de vidro',
            price: 120,
            img: skol600ml
        },
        {
            name: 'Batedor Premium',
            description: 'Batedor de alta qualidade para porta de vidro',
            price: 140,
            img: budweiser600ml
        },
        {
            name: 'Kit Batedor Completo',
            description: 'Kit completo de batedores para porta de vidro',
            price: 200,
            img: heineken
        }
    ],
    'Silicone': [
        {
            name: 'Silicone Neutro Incolor',
            description: 'Silicone neutro para vidro - 280ml',
            price: 120,
            img: caipirinha
        },
        {
            name: 'Silicone Acético Incolor',
            description: 'Silicone acético para vidro - 280ml',
            price: 140,
            img: caipirosca
        },
        {
            name: 'Silicone Estrutural',
            description: 'Silicone estrutural para vidro - 380ml',
            price: 150,
            img: frozen
        },
        {
            name: 'Silicone UV Transparente',
            description: 'Silicone resistente a UV - 280ml',
            price: 150,
            img: ginTropical
        },
        {
            name: 'Silicone para Box',
            description: 'Silicone específico para box de banheiro',
            price: 150,
            img: daiquiri
        },
        {
            name: 'Silicone para Espelho',
            description: 'Silicone específico para fixação de espelhos',
            price: 150,
            img: dryMartini
        },
        {
            name: 'Silicone Neutro Preto',
            description: 'Silicone neutro preto para vidro - 280ml',
            price: 150,
            img: cubaLibre
        },
        {
            name: 'Silicone Neutro Branco',
            description: 'Silicone neutro branco para vidro - 280ml',
            price: 150,
            img: pinaColada
        },
        {
            name: 'Silicone Alta Temperatura',
            description: 'Silicone resistente a altas temperaturas',
            price: 150,
            img: negrone
        }
    ],
    'Outros': [
        {
            name: 'Aplicador de Silicone',
            description: 'Aplicador profissional de silicone',
            price: 30,
            img: agua
        },
        {
            name: 'Espaçadores Plásticos',
            description: 'Conjunto de espaçadores plásticos para vidro',
            price: 50,
            img: refrigeranteLata
        },
        {
            name: 'Kit Ferramentas Vidraceiro',
            description: 'Kit básico de ferramentas para vidraceiro',
            price: 100,
            img: refrigerante1Litro
        },
        {
            name: 'Cantoneiras para Vidro',
            description: 'Conjunto de cantoneiras para proteção de vidro',
            price: 150,
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







