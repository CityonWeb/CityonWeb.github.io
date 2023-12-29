var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); 

Math.uuid = function (len, radix) { 
    var chars = CHARS, uuid = [], i; 
    radix = radix || chars.length; 
    
    if (len) { 
      // Compact form 
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix]; 
    } else { 
      // rfc4122, version 4 form 
      var r; 
    
      // rfc4122 requires these characters 
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'; 
      uuid[14] = '4'; 
    
      // Fill in random data.  At i==19 set the high bits of clock sequence as 
      // per rfc4122, sec. 4.1.5 
      for (i = 0; i < 36; i++) { 
        if (!uuid[i]) { 
          r = 0 | Math.random()*16; 
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]; 
        } 
      } 
    } 
    
    return uuid.join(''); 
  };

  class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    subtract(v) {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    cross(v) {
        return new Vector3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    }

    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    normalize() {
        let mag = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return new Vector3(this.x / mag, this.y / mag, this.z / mag);
    }

    scale(s) {
        return new Vector3(this.x * s, this.y * s, this.z * s);
    }

    add(v) {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
}

function shortestDistance(ray1o, ray1d, ray2o, ray2d) {
    let d1 = ray1d.normalize();
    let d2 = ray2d.normalize();
    let O1 = ray1o;
    let O2 = ray2o;

    let n = new THREE.Vector3().crossVectors(d1, d2).normalize();
    let diff = O2.clone().sub(O1);
    let distance = Math.abs(diff.dot(n));

    if (distance === 0) {
        // 直线在同一平面上
        console.log("Lines are coplanar.");
    } else {
        let t = diff.dot(d2.clone().cross(n)) / d1.clone().dot(d2.clone().cross(n));
        let s = diff.dot(d1.clone().cross(n)) / d2.clone().dot(d1.clone().cross(n));

        let P1 = new THREE.Vector3(O1.x+t*d1.x, O1.y+t*d1.y, O1.z+t*d1.z);
        let P2 = new THREE.Vector3(O2.x-s*d2.x, O2.y-s*d2.y, O2.z-s*d2.z);

        let PC = P1.add(P2).divideScalar(2); // 直线交点

        return {
            distance: Math.abs(distance),
            pointOnL1: P1,
            pointOnL2: P2,
            pointCenter: PC
        };
    }

    return null;
  }

  function cloneCSS2DObject(object) {
    var clonedObject = new THREE.CSS2DObject(object.element.cloneNode(true));
    clonedObject.position.copy(object.position);
    clonedObject.rotation.copy(object.rotation);
    clonedObject.scale.copy(object.scale);
    clonedObject.element.style.cssText = object.element.style.cssText;
    return clonedObject;
  }

  function cloneCSS3DObject(object) {
    var clonedObject = new THREE.CSS3DObject(object.element.cloneNode(true));
    clonedObject.position.copy(object.position);
    clonedObject.rotation.copy(object.rotation);
    clonedObject.scale.copy(object.scale);
    clonedObject.element.style.cssText = object.element.style.cssText;
    return clonedObject;
}