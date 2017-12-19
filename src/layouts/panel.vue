<template>
    <div>
        <navigation />
        <router-view/>
    </div>
</template>
<script>
import Navigation from '@/components/navigation'
export default {
    name: 'panel',
    components: {Navigation}
}
</script>
<style>
</style>