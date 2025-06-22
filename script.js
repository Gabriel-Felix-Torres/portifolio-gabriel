
        document.getElementById("formulario").addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos do formulário.");
                return;
            }

            const texto = `Olá Gabriel, meu nome é ${nome} (${email}). Entrei em contato através do seu portfólio. Mensagem: ${mensagem}`;
        const numero = "5561995117389";
            const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(link, "_blank");
        });

        
        const toggleBtn = document.getElementById("toggle-theme");
        const body = document.body;
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mainMenu = document.getElementById('main-menu');

        mobileMenuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-times');
            icon.classList.toggle('fa-bars');
        });

        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
