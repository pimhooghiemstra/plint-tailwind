<template>
    <div>
        <Menu />
        <PageHeader />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Menu from '../Components/Menu.vue'
import PageHeader from '../Components/PageHeader.vue'
import Footer from '../Components/Footer.vue'

export default {
    components: {
        Menu,
        PageHeader,
        Footer
    },
}
</script>

<style lang="less" scoped>

</style>