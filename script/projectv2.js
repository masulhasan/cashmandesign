document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.hover-circle');
    const hoverElements = document.querySelectorAll(`
        .portfolio-item, 
        .image-section,
        .image-section4,
        .image-section5,
        .image-container,
        .image-container2
    `);
    
    document.addEventListener('mousemove', function(e) {
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    });

    hoverElements.forEach(item => {
        item.addEventListener('mouseenter', function() {
            circle.style.width = '150px';
            circle.style.height = '150px';
        });

        item.addEventListener('mouseleave', function() {
            circle.style.width = '0';
            circle.style.height = '0';
        });
    });
});