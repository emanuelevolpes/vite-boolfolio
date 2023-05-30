<template>
    <section>
        <h1 class="text-center p-4">ABOUT</h1>
        <ul>
            <li>
                <router-link :to="{ name: 'linkedin' }" class="nav-link">Linkedin</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style lang="scss" scoped></style>