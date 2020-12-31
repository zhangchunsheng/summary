<template>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide>预付</swiper-slide>
        <swiper-slide>易宝支付代付</swiper-slide>
        <swiper-slide>微信退款</swiper-slide>
        <swiper-slide>支付宝退款</swiper-slide>
        <swiper-slide>机柜迁移</swiper-slide>
        <swiper-slide>疫情</swiper-slide>
        <swiper-slide>回京隔离</swiper-slide>
        <swiper-slide>浙江调用健康码，用户司机校验</swiper-slide>
        <swiper-slide>网约车聚合服务-小程序，接口，后台，SDK，开放平台，文档；下单、取消、结束、计费、支付</swiper-slide>
        <swiper-slide>企业充值，易宝支付，微信，退款，充值记录，ERP，开发者配置</swiper-slide>
        <swiper-slide>企业混付，司机快提</swiper-slide>
        <swiper-slide>K8S</swiper-slide>
        <swiper-slide>KubeSphere</swiper-slide>
        <swiper-slide>KubeFlow</swiper-slide>
        <swiper-slide>OCR</swiper-slide>
        <swiper-slide>CT智慧管家，小程序，接口，后台，文档</swiper-slide>
        <swiper-slide>公司注册，电子营业执照，银行，发票，税务，软件著作权</swiper-slide>
        <swiper-slide>工业互联网</swiper-slide>
        <swiper-slide>大数据</swiper-slide>
        <swiper-slide>人工智能</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // Some Swiper option/callback...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style lang="scss" scoped>
    @import './base.scss';
</style>