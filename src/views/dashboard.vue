<template>
    <div class="my-menu">
        <navigation />
        <div class="menu-body">
            <router-view />
        </div>
    </div>
</template>
<script>
import navigation from '@/components/navigation'
export default {
    name: 'dashboard',
    components: {
        navigation
    },
    data () {
        return {
            menuList: []
        }
    }
}
</script>
<style>
.my-menu {
    display: flex;
    height: 100%;
    width: 100%;
}

.my-menu .menu-body {
    flex: auto;
}

</style>