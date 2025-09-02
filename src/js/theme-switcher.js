import { themeButton, body } from "./refs";
import { saveThemeToLocalStorage, loadThemeFromLocalStorage } from "./local-storage-api";

const themeKey = 'theme';

export function applyTheme(theme) {
    const isLight = theme === 'light';
    body.classList.toggle('theme-light', isLight);
    body.classList.toggle('theme-dark', !isLight);
    
};

export function initTheme() {
    const savedTheme = loadThemeFromLocalStorage(themeKey, 'dark');
    applyTheme(savedTheme);
};



themeButton.addEventListener('click', () => {

    const darkTheme = body.classList.contains('theme-dark');
    const next = darkTheme ? 'light' : 'dark';

    applyTheme(next);
    saveThemeToLocalStorage(themeKey, next);
});
    

initTheme();