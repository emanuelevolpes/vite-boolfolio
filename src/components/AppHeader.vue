<template>
    <header>
        <nav>
            <div class="container_nav">
                <div class="logo_nav_container">
                    <img class="logo" src="../images/Logo - volpe.svg" alt="Logo">
                </div>
                <div class="menu_nav">
                    <ul>
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
                            <router-link :to="{ name: 'blog' }" class="nav-link">
                                Blog
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
    background-color: transparent;

    .logo {
        height: 50px;
    }

    .container_nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    .menu_nav>ul{
        display: flex;
        list-style: none;
        margin-bottom: 0;
    }

    .menu_nav>ul>li>.nav-link{
        padding: 10px;
        font-size: 20px;

        &:hover{
            transform: scale(1.1);
        }
    }
}
</style>