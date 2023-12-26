
var CONFIG = {

  movementSpeed: 1,

  rollSpeed: Math.PI / 12,

  movementSpeedMultiplier: 1.0,

  dragToLook: true,

  autoForward: false,

  cameraOptions: {
    
    default: {
 
      position: [-0.12748574761598408, 0.5672567168620628,-0.028299540527331635],
      
      rotation: [-2.125516925658461,-1.327752490337395, -0.08798881276599096, 'XYZ'],
    },
    
  },

  occupancyGridBlockSizes: {
    default: [8, 16, 32, 64, 128],
    air: [16, 32, 64, 128, 256],
  },
};
