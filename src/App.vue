<template>
	<div id="app">
	  	<router-view class="view"></router-view>
	</div>
</template>

<script>
import WinHeader from 'components/header/Header'
export default {
  name: 'App',
  components: {
		WinHeader
  }
}
	// 
</script>

<style lang="sass">
	@import './scss/style'
</style>
