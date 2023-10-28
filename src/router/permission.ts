import type { Router } from 'vue-router';

export default function setupPageGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const authStore = localStorage.getItem('token');
    if (authStore  ) {
      try {
        if (to.name === 'login') {
          next(from.fullPath)
        } else {
          next();
        }
      } catch (error) {
        if (to.path !== '/500') next({ name: '500' });
        else next();
      }
    } else {
      if (to.name !== 'login') {
        next({ name: 'login' });
      } else {
        next();
      }
    }
  });
}
