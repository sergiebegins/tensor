
const posenet = require('@tensorflow-models/posenet');

module.exports = async function estimateMultiplePosesOnImage (imageElement) {
    const net = await posenet.load();

    // estimate poses
    const poses = await net.estimateMultiplePoses(imageElement, {
        flipHorizontal: false,
        maxDetections: 2,
        scoreThreshold: 0.6,
        nmsRadius: 20});

    return poses;
}


