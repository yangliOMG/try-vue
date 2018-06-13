<template>
    <div>
        <van-cell :title="'收货人：'+curMes.name" :label="'收货地址：'+curMes.province+curMes.city+curMes.country+curMes.addr2" 
                is-link @click="showList = true" class="bar">
            <van-icon slot="icon" name="contact" class="mt-10 mr-10" style="fontSize:20px" />
            <van-icon slot="right-icon" name="arrow" class="van-cell__right-icon mt-10" />
        </van-cell>
        <van-popup v-model="showList" position="bottom">
            <div class="addrbox">
                <div class="mb-50">
                    <van-cell v-for=" mes in list" :key="mes.id" is-link @click="onSelectD(mes.id)">
                        <van-icon v-if="mes.id===chosenContactId" 
                                slot="icon" name="checked" 
                                class="mt-10 mr-10" style="fontSize:20px;color: #38f;" />
                        <van-icon slot="title">
                            <div class="lh-24">收货人：{{mes.name}}<span class="ml-40">{{mes.tel}}</span></div>
                            <div class="lh-24">收货地址：{{mes.province+mes.city+mes.country+mes.addr2}}
                                <span v-if="mes.is_default" class="c-red">[默认地址]</span>
                            </div>
                        </van-icon>
                        <van-icon slot="right-icon" name="edit" 
                                class="van-cell__right-icon mt-10" style="fontSize:20px;" @click.stop="onEditD(mes.id)" />
                    </van-cell>
                </div>

                <div class="toAddBtn" @click="onAdd">添加新的收货地址</div>
            </div>
        </van-popup>
        <van-popup v-model="showEdit" position="bottom">
            <van-address-edit
                :area-list="areaList"
                :address-info="editMes"
                show-postal
                show-set-default
                @save="onSave"
            />
        </van-popup>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button,Icon,Popup,Cell,AddressEdit } from 'vant'

import areaData from './area.js'

Vue.use(Button).use(Icon).use(Popup).use(Cell).use(AddressEdit)

export default {
    data() {
        const list = [{
                name: '张三',
                tel: '13000000000',
                province: '四川省',
                city: '成都市',
                country: '郫县',
                addr2: '和平小区',
                code: '611730',
                info: '',
                id: 1,
                is_default:true
            },{
                name: '张2',
                tel: '13000000000',
                province: '四川省',
                city: '成都市',
                country: '郫县',
                addr2: '和平小区',
                code: '611730',
                info: '',
                id: 2,
                is_default:false
            }]
        return {
            areaList: areaData,
            editedContactId: null,
            showList: false,
            showEdit: false,
            isEdit: false,
            chosenContactId:list.find(item => item.is_default).id,
            list
        }
    },
    computed: {
        curMes() {
            return this.chosenContactId ? this.list.filter(item => item.id === this.chosenContactId)[0] : {}
        },
        editMes() {
            const info = this.editedContactId ? this.list.find(item => item.id === this.editedContactId) : false
            return info ?{
                name: info.name,
                tel: info.tel,
                province: info.province,
                city: info.city,
                county: info.country,
                address_detail: info.addr2,
                postal_code: info.code,
                id: info.id,
                is_default:info.is_default
            }:{}
        },
    },
    methods: {
        onAdd() {
            this.editedContactId = null
            this.isEdit = false
            this.showEdit = true
        },
        onEditD(id) {
            this.editedContactId = id
            this.isEdit = true      
            this.showEdit = true
        },
        onSelectD(id) {
            this.chosenContactId = id
            this.showList = false
        },
        onSave(info) {
            this.showEdit = false
            this.showList = false
            let infos = {
                name: info.name,
                tel: info.tel,
                province: info.province,
                city: info.city,
                country: info.county,
                addr2: info.address_detail,
                code: info.postal_code,
                id: info.id||Math.floor(Math.random()*10086),
                is_default:info.is_default
            }
            if(info.is_default){
                this.list = this.list.map(item => ({...item , is_default:false}))
            }
            if (this.isEdit) {
                this.list = this.list.map(item => item.id === infos.id ? infos : item)
            } else {
                this.list.push(infos)
            }
            this.chosenContactId = infos.id
        },
    }
}
</script>

<style lang="less" scoped>
.bar:after {
    content: '';
    display: block;
    height: 2px;
    background: -webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#3283fa 0,#3283fa 45%,transparent 0,transparent 50%);
    background: repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#3283fa 0,#3283fa 45%,transparent 0,transparent 50%);
    background-size: 80px;
    bottom: 0;
    top: initial;
    left: 0!important;
    transform: inherit!important;
    border: inherit;
}
.addrbox{
    max-height: 400px;
    overflow: auto;
    .toAddBtn {
        width: 100%;
        background-color: #de0404;
        color: #fff;
        text-align: center;
        line-height: 45px;
        position: absolute;
        bottom: 0;
    }
}
.van-button.van-button--default.van-button--normal.van-button--block{
    display: none;
}
</style>
