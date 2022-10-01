
import jsonmap from './map.json' assert {type: 'json'};


AFRAME.registerComponent('rotation-reader',{
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        let rot = this.el.object3D.rotation;
        // `position` is a three.js Vector3.
        let xyz = this.el.object3D.position;
        let pos = document.getElementById("box").getAttribute("position");
        console.log(Math.round(xyz.x));
        if (xyz.x < jsonmap.length || xyz.x > 0)
            document.getElementById('box').setAttribute('src', jsonmap[Math.round(xyz.x)])
        //console.log(pos);
    }
});