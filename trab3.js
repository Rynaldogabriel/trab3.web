
document.addEventListener("DOMContentLoaded", () => {
    const rooms = document.querySelectorAll('.room');

    rooms.forEach(room => {
        room.addEventListener('click', () => {
            const statusIcon = room.querySelector('.status i');
            const currentStatus = room.dataset.status;

            if (currentStatus === 'livre') {
                room.dataset.status = 'ocupado';
                statusIcon.classList.remove('fa-unlock');
                statusIcon.classList.add('fa-lock');
                statusIcon.setAttribute('alt', 'ocupado');
            } else if (currentStatus === 'ocupado') {
                room.dataset.status = 'livre';
                statusIcon.classList.remove('fa-lock');
                statusIcon.classList.add('fa-unlock');
                statusIcon.setAttribute('alt', 'livre');
            } else if (currentStatus === 'manutencao') {
                alert('Esta sala está em manutenção e não pode ser alterada.');
            }
        });
    });
});
