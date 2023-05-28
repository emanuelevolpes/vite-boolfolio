<template>
    <header>
        <nav>
            <div class="d-flex justify-content-between p-3">
                <div class="logo">
                    Logo
                </div>
                <div class="menu">
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        Home
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
nav {
    background-color: pink;
}
</style>