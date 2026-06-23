document.addEventListener("DOMContentLoaded", () => {
    
    // Captura todos os cards de agricultores da vitrine
    const cardsAgricultores = document.querySelectorAll(".card-agro");

    cardsAgricultores.forEach(card => {
        // Coleta os dados personalizados inseridos em cada tag HTML
        const nomeProdutor = card.getAttribute("data-nome");
        const numeroWhatsapp = card.getAttribute("data-whatsapp");
        const emailProdutor = card.getAttribute("data-email");

        // Configura o botão do WhatsApp
        const btnWhats = card.querySelector(".btn-whatsapp");
        if (btnWhats && numeroWhatsapp) {
            btnWhats.addEventListener("click", () => {
                const mensagem = encodeURIComponent(`Olá! Vi o perfil do ${nomeProdutor} no site Conexão Campo-Cidade e gostaria de conhecer os produtos.`);
                const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
                window.open(urlWhatsapp, "_blank");
            });
        }

        // Configura o botão de E-mail
        const btnEmail = card.querySelector(".btn-email");
        if (btnEmail && emailProdutor) {
            btnEmail.addEventListener("click", () => {
                const assunto = encodeURIComponent(`Interesse em produtos - Conexão Campo-Cidade`);
                const corpo = encodeURIComponent(`Olá, ${nomeProdutor}.\n\nGostaria de obter mais informações sobre a sua produção e tabelas de preços.`);
                const urlEmail = `mailto:${emailProdutor}?subject=${assunto}&body=${corpo}`;
                window.location.href = urlEmail;
            });
        }
    });
});
