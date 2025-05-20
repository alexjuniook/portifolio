// --- Dados do Currículo ---
const resumeData = {
    name: "ALEX J. S. DA SILVA",
    title: "PROFISSIONAL DE INFORMÁTICA",
    contact: {
        phone: "(83) 9 9191-7776",
        email: "alexjuniook@gmail.com",
        address: "Rua Piracaia, 853, Marechal Hermes, Rio de Janeiro - RJ",
        photoUrl: "https://placehold.co/180x180/63B3ED/FFFFFF?text=AS"
    },
    objective: "Busco uma oportunidade, onde possa aplicar minhas habilidades em informática, organização, ou atendimento ao público para contribuir efetivamente com pontualidade e responsabilidade às operações da empresa.",
    skills: [
        { name: "Excel, Word, Power Point", details: "Pacote Office avançado." },
        { name: "Power BI", details: "Criação de dashboards e relatórios." },
        { name: "TOTVS - RM", details: "Conhecimento no sistema ERP." },
        { name: "Atendimento ao público", details: "Experiência em lidar com clientes." },
        { name: "Social Media", details: "Gerenciamento de redes sociais." },
        { name: "Gestão de Tráfego", details: "Criação e otimização de campanhas." },
        { name: "JavaScript, Python, HTML-5", details: "Conhecimentos básicos em desenvolvimento web e programação." },
        { name: "Edição de áudio e vídeo", details: "Ferramentas de edição multimídia." },
        { name: "Design de artes digitais", details: "Criação de peças gráficas." },
        { name: "Segurança Digital", details: "Noções de proteção de dados e sistemas." }
    ],
    experience: [
        {
            company: "Estivas Novo Prado LTDA",
            role: "Carregador e Separador de Estoque",
            description: "Responsável pelo carregamento e separação de estoques para cargas, garantindo a eficiência e organização do processo."
        },
        {
            company: "Câmara Municipal de Baía da Traição",
            role: "Assessor",
            description: "Desempenhei funções de assessoramento, auxiliando em atividades administrativas e de comunicação."
        },
        {
            company: "Eternizzy Photography",
            role: "Editor e Auxiliar de Produção",
            description: "Responsável pela edição de fotografias, sublimação em diversos produtos e confecção de materiais concluindo com relatórios diários."
        },
        {
            company: "SkyBar",
            role: "Estoquista",
            description: "Responsável pelo carregamento e separação de estoques e reabastecimento dos produtos, garantindo a eficiência e organização do ambiente."
        },
        {
            company: "Nascente's Bar",
            role: "Gerente e Garçom",
            description: "Desempenhei funções de atendimento, controle de vendas e supervisão dos garçons."
        },
        {
            company: "Lan House Casa Verde",
            role: "Técnico de T.I. e Tutor de Informática",
            description: "Montagem e trocas de componentes eletrônicos de computadores, e responsável por instruir alunos de informática básica e avançada."
        }
    ],
    education: [
        { course: "Básico de JavaScript e Html-5", institution: "Curso Online" },
        { course: "Instrutor de Informática Profissional", institution: "Instituição de Ensino" },
        { course: "Gestão de Tráfego Pago", institution: "Curso Online" },
        { course: "Analista de Marketing Aplicado a Mídias Sociais", institution: "Curso Online" },
        { course: "Adobe PhotoShop Cs6 (Designer Gráfico)", institution: "Curso Online" },
        { course: "Ensino Superior Incompleto em Ecologia", institution: "Universidade Federal da Paraíba" }
    ],
    additionalInfo: [
        "Portador de CNH A-B",
        "Disponibilidade para trabalhar em outra cidade ou Estado",
        "Flexibilidade para trabalho presencial e remoto",
        "Capacidade de trabalhar em período integral e realizar tarefas eventuais"
    ]
};

// --- Preenche o HTML com os Dados ---
document.addEventListener('DOMContentLoaded', function () {
    // Header
    document.getElementById('profilePic').src = resumeData.contact.photoUrl || 'https://placehold.co/180x180/E2E8F0/2D3748?text=Alex';
    document.getElementById('profilePic').alt = `Foto de ${resumeData.name}`;
    document.getElementById('userName').textContent = resumeData.name;
    document.getElementById('userTitle').textContent = resumeData.title;

    // Telefone
    const phoneLink = document.querySelector('a[href^="tel:"]');
    phoneLink.href = `tel:${resumeData.contact.phone.replace(/\D/g, '')}`;
    phoneLink.querySelector('.tooltip').textContent = `Ligar para ${resumeData.contact.phone}`;

    // Email
    document.getElementById('dynamicEmail').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = `mailto:${resumeData.contact.email}`;
    });

    // Endereço
    document.getElementById('locationLink').querySelector('.tooltip').textContent = resumeData.contact.address;
    document.getElementById('locationLink').addEventListener('click', function (e) {
        e.preventDefault();
        showModalMessage(resumeData.contact.address);
    });

    // Google Maps
    document.getElementById('mapsBtn').addEventListener('click', function (e) {
        e.preventDefault();
        const address = encodeURIComponent(resumeData.contact.address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    });

    // Waze
    document.getElementById('wazeBtn').addEventListener('click', function (e) {
        e.preventDefault();
        const address = encodeURIComponent(resumeData.contact.address);
        window.open(`https://waze.com/ul?q=${address}`, '_blank');
    });

    // Objetivo
    document.getElementById('professionalObjective').textContent = resumeData.objective;

    // Skills
    const skillsList = document.getElementById('skillsList');
    resumeData.skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.classList.add('skill-tag', 'has-tooltip', 'relative');
        skillElement.textContent = skill.name;

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip', 'bottom-full', 'mb-2', 'left-1/2', '-translate-x-1/2');
        tooltip.textContent = skill.details || skill.name;
        skillElement.appendChild(tooltip);

        skillElement.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });
        skillElement.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
        skillsList.appendChild(skillElement);
    });

    // Experiência
    const experienceList = document.getElementById('experienceList');
    resumeData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.classList.add('experience-item', 'card', 'p-4', 'mb-6', 'hover:shadow-lg');
        item.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-700">${exp.role}</h3>
            <p class="text-md font-medium text-gray-600">${exp.company}</p>
            <p class="text-gray-700 mt-2">${exp.description}</p>
        `;
        item.addEventListener('click', () => showModalMessage(`Detalhes da Experiência: ${exp.role} na ${exp.company}. ${exp.description}`));
        experienceList.appendChild(item);
    });

    // Formação
    const educationList = document.getElementById('educationList');
    resumeData.education.forEach(edu => {
        const item = document.createElement('div');
        item.classList.add('education-item', 'card', 'p-4', 'mb-6', 'hover:shadow-lg');
        item.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-700">${edu.course}</h3>
            <p class="text-md font-medium text-gray-600">${edu.institution}</p>
        `;
        item.addEventListener('click', () => showModalMessage(`Formação: ${edu.course} - ${edu.institution}.`));
        educationList.appendChild(item);
    });

    // Informações adicionais
    const additionalInfoList = document.getElementById('additionalInfoList');
    resumeData.additionalInfo.forEach(info => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fas fa-check-circle text-green-500 mr-2"></i>${info}`;
        additionalInfoList.appendChild(listItem);
    });

    // Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Animação fadeInUp nos cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Modal functions
const modal = document.getElementById('customModal');
const modalMessageText = document.getElementById('modalMessageText');

function showModalMessage(message) {
    modalMessageText.textContent = message;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Fecha modal ao clicar fora
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};