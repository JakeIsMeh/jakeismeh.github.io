export default defineNuxtPlugin(() => {
    useHead({
      titleTemplate: (title) => { return title ? `${title} | JakeIsMeh` : 'JakeIsMeh' },
    });
  });
  