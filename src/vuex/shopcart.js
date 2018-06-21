export default {
    state:{
        goodList:[
        ]
    },
    mutations:{
        addList(state,data){
            let idx = state.goodList.findIndex(i=>i.id===data.id)
            if(idx>=0){
                state.goodList[idx].num += data.num
            }else{
                state.goodList.push(data)
            }
        },
        removeList(state,id){
            let idx = state.goodList.findIndex(i=>i.id===id)
            if(idx>=0){
                state.goodList.splice(idx,1)
            }
        },
        changeNum(state,data){
            let idx = state.goodList.findIndex(i=>i.id===data.id)
            if(idx>=0){
                state.goodList[idx].num = data.num
            }
        }
    },
    actions:{
        addList(context,data){
            context.commit('addList',data)
        },
        removeList(context,id){
            context.commit('removeList',id)
        },
        changeNum(context,data){
            context.commit('changeNum',data)
        },
    }
}

