<template>
    <div>
        <h2 v-text="title"></h2>
        Full width page block (content is centered)

        <p v-if="variant" v-text="variant"></p>
        
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
        },
        variant: {
            required: false,
            type: String,
        },
    },
}
</script>

<style lang="less" scoped>

</style>