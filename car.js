AFRAME.registerComponent("car",{
    schema:{
        mover:{type:"number", default:1}
    },
    tick:function(){
        this.data.mover=this.data.mover+0.1
        var pos=this.el.getAttribute("position")
        pos.x=this.data.mover
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})