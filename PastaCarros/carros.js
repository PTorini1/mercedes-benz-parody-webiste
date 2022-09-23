const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
                entry.target.classList('show');
            }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hidden_twoElements = document.querySelectorAll('.hidden_two');
hidden_twoElements.forEach((el) => observer_two.observe(el));
