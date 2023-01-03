REF_SWITCH_MODE.addEventListener('click', () => {
    REF_BODY.dataset.theme = REF_BODY.dataset.theme === 'dark' ? 'light' : 'dark';
});

REF_FA_CONTAINER.querySelector('.carousel').querySelectorAll('.carousel-item').forEach(
    (item, index) => {
        item.addEventListener('click', () => {
            REF_FA_CAROUSEL_SCREEN.src = item.querySelector('img').src;
        });
    }
);