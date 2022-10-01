

const jsonmap = fetch("./map.json").then(response => {
    return response.json();
 }).json;

AFRAME.registerComponent('rotation-reader',{
    tick: function () {
        console.log(jsonmap);
        // `this.el` is the element.
        // `object3D` is the three.js object.
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        let = rot = this.el.object3D.rotation;
        // `position` is a three.js Vector3.
        let = xyz = this.el.object3D.position;
        let = pos = document.getElementById("box").getAttribute("position");
        
        if (xyz.x )
        console.log(pos);
    }
});