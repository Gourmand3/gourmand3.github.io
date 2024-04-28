document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-button-species');
    const prevButtons = document.querySelectorAll('.previous-button-species');
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = this.parentElement;
            const nextSection = currentSection.nextElementSibling;

            if (nextSection) {
                currentSection.style.display = 'none';
                nextSection.style.display = 'block';
            }
        });
    });
    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = this.parentElement;
            const prevSection = currentSection.previousElementSibling;
    
            if (prevSection) {
                currentSection.style.display = 'none';
                prevSection.style.display = 'block';
            }
        });
    });
});
  