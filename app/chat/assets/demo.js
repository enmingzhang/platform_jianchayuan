/**
 * Created by WIN10 on 2017/1/4.
 */
var data = {
    name: '安徽检察',
    children: [

        {
            name: '安徽人民检察院',
            children: [
                {
                    name: '院领导',
                    children: [
                        { name: '王龙',header:'assets/u1.jpg' },
                        { name: '李刚',header:'assets/u2.jpg' }
                    ]
                },
                { name: '技术处' },
            ]
        },
        {
            name: '合肥检察',
            children: [
                { name: '合肥人民检察院' }
            ]
        }
    ]
};

var initData = {
    chatActive:true,
    userActive:false,
    fileActive:false,
    treeData: data,
    active_1:true,
    active_2:false,
    active_3:false,
    active_4:false

}

Vue.component('item', {
    template: '#item-template',
    props: {
        model: Object
    },
    data: function () {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function () {
            return this.model.children &&
                this.model.children.length
        },
        isUser: function(){
            return this.model.hasOwnProperty("header")
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function () {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
})

// boot up the demo
var demo = new Vue({
    el: '.body_content',
    data: initData,
    methods: {
        changeTab: function (type) {
            this.chatActive = false;
            this.userActive = false;
            this.fileActive = false;

            if(type == 'chat'){
                this.chatActive = true;
            }else if(type == 'user'){
                this["active_1"] = false;
                this["active_2"] = false;
                this["active_3"] = false;
                this["active_4"] = false;

                this.userActive = true;
            }else if(type == 'file'){
                this.fileActive = true;
            }

        },
        changeChat: function(id){
            //console.log(event);
            this["active_1"] = false;
            this["active_2"] = false;
            this["active_3"] = false;
            this["active_4"] = false;

            this["active_" + id] = true;
        }
    },
    computed: {
        classObject: function () {
            return {
                "hide": this.active_2 == false && this.active_3 == false && this.active_4 == false
            }
        },
        newsObject: function(){
            return {
                "hide": this.active_2 || this.active_3 || this.active_4 || this.active_1 == false
            }
        },
        profileObject:function(){
            return {
                "hide": this.active_2 || this.active_3 || this.active_4 || this.active_1  || this.fileActive || this.chatActive
            }
        }
    }
})
