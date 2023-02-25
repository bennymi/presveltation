import type { Actions } from "./$types";

export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get('theme');

        if (theme) {
            cookies.set('colortheme', theme, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365,
            });
        }
    }
};