document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.hover-circle');
    const items = document.querySelectorAll('.portfolio-item');

    document.addEventListener('mousemove', function(e) {
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    });

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            circle.style.width = '150px';  // Adjust size as needed
            circle.style.height = '150px'; // Adjust size as needed
        });

        item.addEventListener('mouseleave', function() {
            circle.style.width = '0';
            circle.style.height = '0';
        });
    });
});