<template>
    <header>
        <nav>
            <div class="d-flex justify-content-between p-3">
                <div class="logo">
                    Logo
                </div>
                <div class="menu">
                    <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About us
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'projects' }" class="nav-link">
                                Projects
                            </router-link>
                        </li>
                    </ul>
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