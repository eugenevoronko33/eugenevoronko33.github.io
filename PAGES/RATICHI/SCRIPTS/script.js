  document.addEventListener('DOMContentLoaded', () => {
            // Script for fade-in animation on scroll
            const sections = document.querySelectorAll('.section-fade-in');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            sections.forEach(section => observer.observe(section));

            // Modal gallery script
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById("modalImage");
            const galleryItems = document.querySelectorAll('.gallery-item');
            const closeBtn = document.querySelector(".close-modal");

            galleryItems.forEach(item => {
                item.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.dataset.src;
                }
            });

            if(closeBtn) {
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }
            }
            
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });