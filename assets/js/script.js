 let currentLanguage = 'id';

        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        }

        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        }

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        function openLanguageModal() {
            document.getElementById('languageModal').classList.add('active');
        }

        function closeLanguageModal() {
            document.getElementById('languageModal').classList.remove('active');
        }

        function changeLanguage(lang) {
            currentLanguage = lang;
            const elements = document.querySelectorAll('[data-lang-id]');
            
            elements.forEach(element => {
                const text = element.getAttribute(`data-lang-${lang}`);
                if (text) {
                    if (element.tagName === 'A' || element.tagName === 'P' || element.tagName === 'LI' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') {
                        element.textContent = text;
                    } else {
                        element.innerHTML = text;
                    }
                }
            });
            
            localStorage.setItem('language', lang);
            closeLanguageModal();
        }

        // Load saved preferences
        window.addEventListener('DOMContentLoaded', () => {
            // Load theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.body.classList.add('light-theme');
            }

            // Load language
            const savedLang = localStorage.getItem('language');
            if (savedLang) {
                changeLanguage(savedLang);
            }
        });

        // Close modal when clicking outside
        document.getElementById('languageModal').addEventListener('click', (e) => {
            if (e.target.id === 'languageModal') {
                closeLanguageModal();
            }
        });