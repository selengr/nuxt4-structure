<template>
  <div class="layout-wrapper">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-left">
        <img
          src="https://nuxt.com/assets/design-kit/logo-green-black.svg"
          alt="logo"
          class="logo"
        />
        <span class="nav-title">NuxtDash</span>
      </div>

      <div class="nav-right">
        <button class="nav-btn">Docs</button>
        <button class="nav-btn">Account</button>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      © {{ new Date().getFullYear() }} NuxtDash — Built with Nuxt 4
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #181b24, #232334, #181b24);
  color: #eee;
  font-family: system-ui, sans-serif;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #0d0d0d;
  border-bottom: 1px solid #303030;
  box-shadow: 0 2px 10px #0004;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 32px;
  width: 32px;
}

.nav-title {
  font-size: 22px;
  font-weight: 600;
}

.nav-right {
  display: flex;
  gap: 16px;
}

.nav-btn {
  background: transparent;
  color: #ccc;
  border: 1px solid #333;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.25s;
}

.nav-btn:hover {
  background: #222;
  color: #fff;
}

/* PAGE CONTENT */
.content {
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* FOOTER */
.footer {
  text-align: center;
  padding: 14px 0;
  font-size: 14px;
  color: #888;
  border-top: 1px solid #303030;
}
</style>
