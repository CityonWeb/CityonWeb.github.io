/**
 * 配置
 */
var CONFIG = {
  //【控制器】移动速度
  movementSpeed: 1,
  //【控制器】旋转速度
  rollSpeed: Math.PI / 12,
  //【控制器】奔跑的速度
  movementSpeedMultiplier: 1.0,
  //【控制器】是否鼠标按下才开始旋转视角
  dragToLook: true,
  //【控制器】自动前进
  autoForward: false,

  // 相机的初始位置和初始角度
  cameraOptions: {
    // 默认的位置和角度
    default: {
      // 打开浏览器控制台，输入：gCamera.position.toArray()，直接复制结果
      position: [
        -0.6738192938601434
,
        1.9258114308332386
,
        1.452364284561756],
      // 打开浏览器控制台，输入：gCamera.rotation.toArray()
      rotation: [ -0.7620079365288385, -1.4175885362635288,  -1.2909744504286478, 'XYZ'],
    },
  },

  // 网格大小
  occupancyGridBlockSizes: {
    default: [8, 16, 32, 64, 128],
    air: [16, 32, 64, 128, 256],
  },
};
