import jsonmap from "./map.json" assert {type: "json"};

AFRAME.registerComponent('update',{
    tick: function () {
        var rot = this.el.object3D.rotation;
        var xyz = this.el.object3D.position;
        
        var pos = document.getElementById("im").getAttribute("position");
        var test = rot.y * 180 / Math.PI;
        console.log(test);
        if (test < jsonmap.length && test > 0) {
            document.getElementById('im').setAttribute('src', jsonmap[Math.round(test)]);
         }
    }
});
document.getElementById('cam').setAttribute('update','');
