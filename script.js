  
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        
        function handleRegistration(e) {
            e.preventDefault();
            const registrationURL = 'https://docs.google.com/forms/d/e/1FAIpQLScBvbB9OTOTlRYmbSBKM3CUqs9EjDCPhVk2M2vTQX4LLqVlfA/viewform?usp=publish-editor';
            
            
            window.open(registrationURL, '_blank');
            
            // Alternatively, you can show an alert
            alert('पंजीकरण फॉर्म शीघ्र ही उपलब्ध होगा। कृपया hindisamiti@mitsgwalior.ac.in पर संपर्क करें।');

        }
