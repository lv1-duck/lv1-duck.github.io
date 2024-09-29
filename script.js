document.addEventListener("DOMContentLoaded", function () {
    const assignments = document.querySelectorAll('.assignment');

    assignments.forEach(assignment => {
        const deadlineElement = assignment.querySelector('.deadline');
        const timerElement = assignment.querySelector('.timer');
        const deadline = new Date(deadlineElement.getAttribute('data-deadline'));

        updateTimer(deadline, timerElement);
        setInterval(() => {
            updateTimer(deadline, timerElement);
        }, 1000);
    });

    function updateTimer(deadline, timerElement) {
        const now = new Date();
        const timeDifference = deadline - now;

        if (timeDifference <= 0) {
            timerElement.textContent = 'Deadline na!';
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
});
