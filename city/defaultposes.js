/**
 * @fileoverview Defines default camera pose for each scene.
 */

/**
 *  Set initial camera pose depending on the scene.
 */
function setupInitialCameraPose(dirUrl) {

  const pos = CONFIG.cameraOptions

  setCameraPose(pos["default"]);

  gCamera.updateProjectionMatrix();
}

function setCameraPose(d) {
  gCamera.position.fromArray(d.position);

  gOrbitControls.target.x = d.rotation[0];
  gOrbitControls.target.y = d.rotation[1];
  gOrbitControls.target.z = d.rotation[2];
}
