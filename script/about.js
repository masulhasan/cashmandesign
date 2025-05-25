document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.hover-circle');
    const videoItems = document.querySelectorAll('.portfolio-item, .video-container');
    
    document.addEventListener('mousemove', function(e) {
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    });

    videoItems.forEach(item => {
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