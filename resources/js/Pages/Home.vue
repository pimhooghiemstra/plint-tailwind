<template>
    <Head title="Maatwerk websites, webshops en webapplicaties" />

    <Menu />
    <PageHeader />

    <FullWidthPageBlock title="Diensten" />
    <FullWidthPageBlock title="Visie" variant="image"/>
    <FullWidthPageBlock title="Projecten" />
    <FullWidthPageBlock title="Reviews" variant="shape"/>
    <FullWidthPageBlock title="Blogs" />

    <div class="grid place-items-center min-h-screen bg-white dark:bg-gray-900 sm:pt-0">
        <div class="max-w-3xl leading-7 bg-purple-100 p-8 rounded-2xl">
            <h2 class="font-semibold font-oswald text-2xl text-purple-500 hover:text-sky-600">
                Lim Loempia
                <Icon icon="mdi-light:home" class="float-right text-red-600"/>
            </h2>
            <p class="text-purple-300">
                “Gemak dient de mens.” En dat is meer dan waar op het internet. Daarom streven wij naar gebruiksvriendelijke websites met een heldere, intuïtieve structuur. <i>Daarnaast ben ik gewoon een Lim</i>. Uiteraard geoptimaliseerd voor smartphones, tablets en desktopcomputers. 
            </p>
            <!-- <img src="/images/road-vision.jpg" alt="Road vision"> -->
            <!-- <Link href="/dashboard">Naar dasboard</Link> -->
        </div>
    </div>

    <Footer />
</template>

<script>
import Menu from '../Components/Homepage/Menu.vue'
import PageHeader from '../Components/Homepage/PageHeader.vue'
import FullWidthPageBlock from '../Components/Homepage/FullWidthPageBlock.vue'
import Footer from '../Components/Footer.vue'

export default {
    components: {
        Menu,
        PageHeader,
        FullWidthPageBlock,
        Footer
    },
}
</script>

<style scoped>
    
</style>