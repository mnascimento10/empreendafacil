// ===== NAVEGAÇÃO =====
function scrollParaPerfis() {
    document.getElementById("perfis").scrollIntoView({ behavior: "smooth" });
}

// ===== TRACKING (Supabase — registrar_clique) =====
const ITEM_POR_LINK = {
    "pdf/Tutorial_GoogleMeuNegocio.pdf": "pdf_googlemaps",
    "pdf/Tutorial_Instragram.pdf": "pdf_instagram",
    "pdf/Tutorial_WhatsappBusiness.pdf": "pdf_whatsapp",
    "pdf/Tutorial_IAdoCanva.pdf": "pdf_canva",
    "pdf/Tutorial_GoogleAgenda.pdf": "pdf_agenda",
    "https://docs.google.com/spreadsheets/d/1nJgnQxeG4onwF_qRXNc0iPcShPBTy0B0LkhIp5mUND8/copy": "planilha_fluxo",
    "https://docs.google.com/spreadsheets/d/1qP-9rMoj8apNPkCN7F895Oo0NuSd-l9hkDuqrdz8gvk/copy": "planilha_motorista",
    "https://docs.google.com/spreadsheets/d/1N4QzJ7iQ-Azb9AIPGLGcvHXJEYskXQLTmQb1jGxqyRw/copy": "planilha_produtor",
};

function itemTrackingPorLink(link) {
    if (!link) return null;
    if (ITEM_POR_LINK[link]) return ITEM_POR_LINK[link];
    const arquivo = link.split("/").pop().split("?")[0];
    for (const [chave, item] of Object.entries(ITEM_POR_LINK)) {
        if (chave.endsWith(arquivo)) return item;
    }
    return null;
}

function aoClicarMaterial(item) {
    if (item && typeof registrarClique === "function") {
        registrarClique(item);
    }
}

// ===== DADOS DOS PERFIS =====
const perfis = {

    mei: {
        titulo: "MEI — Organize e profissionalize seu negócio",
        descricao: "Se você é MEI, o maior desafio normalmente não é falta de trabalho — é não ter organização e presença digital. Aqui você encontra ferramentas simples para aparecer para novos clientes, atender melhor e controlar seu dinheiro.",
        secoes: [
            {
                num: "1",
                titulo: "Apareça para novos clientes",
                desc: "Se as pessoas não encontram seu negócio, você perde oportunidades todos os dias. O primeiro passo é se tornar visível na internet.",
                materiais: [
                    { icon: "📍", nome: "Como aparecer no Google Maps", sub: "Tutorial Google Meu Negócio", link: "pdf/Tutorial_GoogleMeuNegocio.pdf" },
                    { icon: "📸", nome: "Criar Instagram profissional", sub: "Passo a passo completo", link: "pdf/Tutorial_Instragram.pdf" },
                    { icon: "🎨", nome: "Criar artes no Canva", sub: "Com inteligência artificial", link: "pdf/Tutorial_IAdoCanva.pdf" }
                ],
                dicas: {
                    titulo: "Dicas rápidas de divulgação",
                    items: [
                        "Poste fotos reais do seu trabalho",
                        "Mostre antes e depois (se aplicável)",
                        "Use depoimentos de clientes",
                        "Poste com frequência — 2 a 3 vezes por semana"
                    ]
                }
            },
            {
                num: "2",
                titulo: "Atenda melhor e aumente suas vendas",
                desc: "Muitos clientes são perdidos não pela qualidade do serviço, mas pelo atendimento. Responder rápido e de forma organizada faz toda diferença.",
                materiais: [
                    { icon: "💬", nome: "Configurar WhatsApp Business", sub: "Atendimento profissional", link: "pdf/Tutorial_WhatsappBusiness.pdf" }
                ],
                dicas: {
                    titulo: "Como fidelizar clientes",
                    items: [
                        "Responda rápido",
                        "Chame o cliente pelo nome",
                        "Mantenha um padrão de atendimento",
                        "Peça avaliação após o serviço",
                        "Ofereça retorno ou acompanhamento"
                    ]
                }
            },
            {
                num: "3",
                titulo: "Controle seu negócio",
                desc: "Sem controle financeiro, você pode trabalhar muito e não ter lucro. Anote entradas e saídas, separe dinheiro pessoal do negócio e revise toda semana.",
                planilha: {
                    nome: "Planilha de controle financeiro",
                    sub: "Fluxo de caixa — Google Sheets gratuito",
                    link: "https://docs.google.com/spreadsheets/d/1nJgnQxeG4onwF_qRXNc0iPcShPBTy0B0LkhIp5mUND8/copy"
                },
                dicas: {
                    titulo: "Boas práticas financeiras",
                    items: [
                        "Separe o dinheiro pessoal do negócio",
                        "Anote todas as entradas e saídas",
                        "Revise semanalmente"
                    ]
                }
            }
        ]
    },

    autonomo: {
        titulo: "Autônomo — Fortaleça sua imagem profissional",
        descricao: "Como autônomo, sua renda depende diretamente da sua organização e da forma como você se apresenta. Pequenos ajustes já fazem grande diferença na quantidade de clientes e no valor que você consegue cobrar.",
        secoes: [
            {
                num: "1",
                titulo: "Apareça para novos clientes",
                desc: "Se o cliente não encontra você, ele contrata outro. Estar visível é essencial para crescer.",
                materiais: [
                    { icon: "📍", nome: "Como aparecer no Google", sub: "Tutorial Google Meu Negócio", link: "pdf/Tutorial_GoogleMeuNegocio.pdf" },
                    { icon: "🎨", nome: "Cartão digital e artes no Canva", sub: "Com inteligência artificial", link: "pdf/Tutorial_IAdoCanva.pdf" }
                ]
            },
            {
                num: "2",
                titulo: "Atenda com mais profissionalismo",
                desc: "Um atendimento bem estruturado aumenta muito sua taxa de conversão e passa mais confiança para o cliente.",
                materiais: [
                    { icon: "💬", nome: "Configurar WhatsApp Business", sub: "Atendimento profissional", link: "pdf/Tutorial_WhatsappBusiness.pdf" }
                ],
                dicas: {
                    titulo: "Como pedir avaliações",
                    items: [
                        "Peça após finalizar o serviço",
                        "Envie link direto para avaliação",
                        "Use depoimentos como prova social"
                    ]
                }
            },
            {
                num: "3",
                titulo: "Organize seus atendimentos",
                desc: "Organização evita atrasos, esquecimentos e melhora sua imagem profissional.",
                materiais: [
                    { icon: "📅", nome: "Organizar com Google Agenda", sub: "Gestão de horários", link: "pdf/Tutorial_GoogleAgenda.pdf" }
                ]
            },
            {
                num: "4",
                titulo: "Controle seu dinheiro",
                desc: "Sem controle financeiro, você não sabe se está crescendo ou apenas trabalhando mais.",
                planilha: {
                    nome: "Planilha de fluxo de caixa",
                    sub: "Controle financeiro — Google Sheets gratuito",
                    link: "https://docs.google.com/spreadsheets/d/1nJgnQxeG4onwF_qRXNc0iPcShPBTy0B0LkhIp5mUND8/copy"
                }
            },
            {
                num: "5",
                titulo: "Aumente sua credibilidade",
                desc: "A confiança do cliente é o que permite cobrar melhor e ter mais indicações.",
                dicas: {
                    titulo: "Como construir credibilidade",
                    items: [
                        "Use fotos reais e de boa qualidade do seu trabalho",
                        "Mantenha um padrão visual (cores, estilo, comunicação)",
                        "Seja pontual nos atendimentos",
                        "Tenha canais de contato organizados",
                        "Mostre avaliações de clientes"
                    ]
                }
            }
        ]
    },

    motorista: {
        titulo: "Motorista de App — Ganhe mais e controle seu dinheiro",
        descricao: "Trabalhar com aplicativos exige estratégia. Não basta rodar mais — é preciso saber quando, onde e como trabalhar para realmente ter lucro.",
        secoes: [
            {
                num: "1",
                titulo: "Aumente seus ganhos",
                desc: "Trabalhar nos horários e locais certos faz toda diferença no faturamento diário.",
                dicas: {
                    titulo: "Estratégias para ganhar mais",
                    items: [
                        "Prefira horários de alta demanda",
                        "Evite períodos muito parados",
                        "Conheça regiões com maior movimento"
                    ]
                }
            },
            {
                num: "2",
                titulo: "Controle seus ganhos e despesas",
                desc: "Sem controle, você pode rodar o dia inteiro e não ter lucro real após descontar combustível e manutenção.",
                planilha: {
                    nome: "Planilha de controle diário",
                    sub: "Ganhos, combustível e lucro real — Google Sheets",
                    link: "https://docs.google.com/spreadsheets/d/1qP-9rMoj8apNPkCN7F895Oo0NuSd-l9hkDuqrdz8gvk/copy"
                },
                dicas: {
                    titulo: "O que a planilha te ajuda a fazer",
                    items: [
                        "Registrar ganhos do dia",
                        "Controlar combustível e manutenção",
                        "Calcular lucro real",
                        "Planejar reserva financeira"
                    ]
                }
            },
            {
                num: "3",
                titulo: "Mantenha uma boa reputação",
                desc: "Sua avaliação impacta diretamente na quantidade de chamadas que você recebe.",
                dicas: {
                    titulo: "Dicas de atendimento",
                    items: [
                        "Seja educado e cordial",
                        "Mantenha o veículo limpo",
                        "Evite cancelamentos desnecessários",
                        "Cumpra horários e rotas corretamente"
                    ]
                }
            },
            {
                num: "4",
                titulo: "Gere renda extra fora do aplicativo",
                desc: "Além dos apps, você pode conseguir clientes próprios para fretes, entregas ou corridas particulares.",
                materiais: [
                    { icon: "💬", nome: "Usar WhatsApp Business", sub: "Atendimento profissional", link: "pdf/Tutorial_WhatsappBusiness.pdf" },
                    { icon: "🎨", nome: "Criar cartões e divulgação no Canva", sub: "Com inteligência artificial", link: "pdf/Tutorial_IAdoCanva.pdf" }
                ],
                dicas: {
                    titulo: "Como captar clientes diretos",
                    items: [
                        "Divulgue seu contato para clientes recorrentes",
                        "Crie um cartão digital simples",
                        "Ofereça serviços como entregas ou viagens agendadas"
                    ]
                }
            }
        ]
    },

    beleza: {
        titulo: "Profissional de Beleza — Atraia clientes e fidelize",
        descricao: "Na área da beleza, a imagem e a organização fazem toda a diferença. Clientes escolhem quem transmite confiança, mostra resultados e oferece um bom atendimento.",
        secoes: [
            {
                num: "1",
                titulo: "Divulgue seu trabalho corretamente",
                desc: "Clientes precisam ver seu trabalho para confiar e agendar. Uma boa apresentação vale mais que qualquer propaganda.",
                materiais: [
                    { icon: "📸", nome: "Criar Instagram profissional", sub: "Passo a passo completo", link: "pdf/Tutorial_Instragram.pdf" },
                    { icon: "💬", nome: "Configurar WhatsApp Business", sub: "Com catálogo de serviços", link: "pdf/Tutorial_WhatsappBusiness.pdf" },
                    { icon: "🎨", nome: "Criar artes no Canva", sub: "Com inteligência artificial", link: "pdf/Tutorial_IAdoCanva.pdf" }
                ],
                dicas: {
                    titulo: "Dicas de postagem e fotos",
                    items: [
                        "Mostre antes e depois (quando possível)",
                        "Publique fotos reais dos seus atendimentos",
                        "Use boa iluminação — luz natural de preferência",
                        "Mantenha fundo limpo e organizado",
                        "Poste 2 a 3 vezes por semana"
                    ]
                }
            },
            {
                num: "2",
                titulo: "Organize sua agenda e atendimentos",
                desc: "Uma agenda organizada evita atrasos e melhora a experiência do cliente.",
                materiais: [
                    { icon: "📅", nome: "Organizar com Google Agenda", sub: "Gestão de horários", link: "pdf/Tutorial_GoogleAgenda.pdf" }
                ],
                dicas: {
                    titulo: "Boas práticas de agendamento",
                    items: [
                        "Confirme horários com antecedência",
                        "Evite atrasos",
                        "Mantenha registro dos clientes"
                    ]
                }
            },
            {
                num: "3",
                titulo: "Fidelize seus clientes",
                desc: "Clientes satisfeitos voltam e indicam seu trabalho. A fidelização é o caminho mais barato para crescer.",
                materiais: [
                    { icon: "📍", nome: "Aparecer e receber avaliações no Google", sub: "Tutorial Google Meu Negócio", link: "pdf/Tutorial_GoogleMeuNegocio.pdf" }
                ],
                dicas: {
                    titulo: "Como fidelizar",
                    items: [
                        "Peça avaliação após o atendimento",
                        "Envie o link do Google para facilitar",
                        "Mantenha contato com clientes antigos",
                        "Ofereça retorno (ex: manutenção do serviço)"
                    ]
                }
            }
        ]
    },

    produtor: {
        titulo: "Produtor Manual — Venda mais e organize sua produção",
        descricao: "Quem trabalha com produtos manuais precisa não só produzir bem, mas também saber divulgar, organizar pedidos e calcular corretamente o preço para ter lucro de verdade.",
        secoes: [
            {
                num: "1",
                titulo: "Divulgue seus produtos",
                desc: "A forma como você apresenta seus produtos influencia diretamente nas vendas.",
                materiais: [
                    { icon: "📸", nome: "Criar Instagram profissional", sub: "Passo a passo completo", link: "pdf/Tutorial_Instragram.pdf" }
                ],
                dicas: {
                    titulo: "Dicas de postagem",
                    items: [
                        "Mostre o produto final com boa iluminação",
                        "Mostre detalhes do acabamento",
                        "Mostre o processo de produção",
                        "Use fotos reais — evite imagens genéricas"
                    ]
                }
            },
            {
                num: "2",
                titulo: "Crie imagens e catálogos profissionais",
                desc: "Uma boa apresentação aumenta o valor percebido do seu produto e justifica preços maiores.",
                materiais: [
                    { icon: "🎨", nome: "Criar artes e catálogos no Canva", sub: "Com inteligência artificial", link: "pdf/Tutorial_IAdoCanva.pdf" }
                ]
            },
            {
                num: "3",
                titulo: "Venda e atenda pelos canais certos",
                desc: "Você pode vender tanto diretamente pelo WhatsApp quanto por plataformas online.",
                materiais: [
                    { icon: "💬", nome: "Usar WhatsApp Business", sub: "Com catálogo e pós-venda", link: "pdf/Tutorial_WhatsappBusiness.pdf" }
                ],
                dicas: {
                    titulo: "Dicas de vendas",
                    items: [
                        "Use WhatsApp para atendimento rápido",
                        "Organize pedidos por cliente",
                        "Considere vender em marketplaces ou redes sociais"
                    ]
                }
            },
            {
                num: "4",
                titulo: "Organize pedidos e calcule seu lucro",
                desc: "Sem controle, você pode vender bastante e ainda assim não ter lucro real.",
                planilha: {
                    nome: "Planilha de controle de pedidos e lucro",
                    sub: "Precificação e gestão — Google Sheets gratuito",
                    link: "https://docs.google.com/spreadsheets/d/1N4QzJ7iQ-Azb9AIPGLGcvHXJEYskXQLTmQb1jGxqyRw/copy"
                },
                dicas: {
                    titulo: "O que a planilha te ajuda a fazer",
                    items: [
                        "Calcular o preço correto do produto",
                        "Controlar pedidos em andamento",
                        "Organizar custos e lucros"
                    ]
                }
            },
            {
                num: "5",
                titulo: "Pós-venda e fidelização",
                desc: "Um bom pós-venda aumenta muito a chance do cliente comprar novamente.",
                dicas: {
                    titulo: "Como fazer pós-venda",
                    items: [
                        "Envie mensagem após a entrega",
                        "Peça feedback do produto",
                        "Ofereça novos produtos ou novidades"
                    ]
                }
            }
        ]
    }
};

// ===== RENDERIZAÇÃO DO PERFIL =====
function selecionarPerfil(key, btnEl) {

    document.querySelectorAll(".perfil-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    const dados = perfis[key];
    if (!dados) return;

    let html = `<div class="perfil-conteudo">
        <h2>${dados.titulo}</h2>
        <p>${dados.descricao}</p>`;

    dados.secoes.forEach(sec => {
        html += `<div class="perfil-section">
            <div class="perfil-section-header">
                <div class="perfil-section-num">${sec.num}</div>
                <h3>${sec.titulo}</h3>
            </div>
            <p>${sec.desc}</p>`;

        if (sec.materiais && sec.materiais.length) {
            html += `<div class="materiais-grid">`;
            sec.materiais.forEach(m => {
                const track = itemTrackingPorLink(m.link);
                const onTrack = track ? ` onclick="aoClicarMaterial('${track}')"` : "";
                html += `<a href="${m.link}" target="_blank" rel="noopener" class="material-card"${onTrack}>
                    <div class="material-card-icon">${m.icon}</div>
                    <div class="material-card-text">
                        <strong>${m.nome}</strong>
                        <span>${m.sub}</span>
                    </div>
                </a>`;
            });
            html += `</div>`;
        }

        if (sec.planilha) {
            const track = itemTrackingPorLink(sec.planilha.link);
            const onTrack = track ? ` onclick="aoClicarMaterial('${track}')"` : "";
            html += `<a href="${sec.planilha.link}" target="_blank" rel="noopener" class="planilha-card"${onTrack}>
                <div class="planilha-icon">📊</div>
                <div class="planilha-text">
                    <strong>${sec.planilha.nome}</strong>
                    <span>${sec.planilha.sub}</span>
                </div>
                <div class="planilha-arrow">→</div>
            </a>`;
        }

        if (sec.dicas) {
            html += `<div class="dica-box">
                <div class="dica-box-title">${sec.dicas.titulo}</div>
                <ul>${sec.dicas.items.map(d => `<li>${d}</li>`).join("")}</ul>
            </div>`;
        }

        html += `</div>`;
    });

    html += `</div>`;

    const area = document.getElementById("conteudo");
    area.innerHTML = html;
    area.scrollIntoView({ behavior: "smooth" });
}
