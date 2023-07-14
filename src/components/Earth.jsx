// Please for the love of god refactor this before you put it up on github - you


import React, { useEffect } from "react";
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer()
const composer = new EffectComposer( renderer )
const ambientLight = new THREE.DirectionalLight( 0xcccccc, 2 );
const loader = new GLTFLoader()
const unrealBloomPass = new UnrealBloomPass()
const renderPass = new RenderPass( scene, camera )

let sceneContainer;
let earthObject;

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setPixelRatio(window.devicePixelRatio);

composer.setSize( window.innerWidth, window.innerHeight )
composer.setPixelRatio(window.devicePixelRatio)

window.addEventListener('resize', () => {
  let width = window.innerWidth
  let height = window.innerHeight

  renderer.setSize( width, height )
  composer.setSize( width, height )

  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

loader.load( './src/assets/Earth.glb', function( gltf ) {
  gltf.scene.scale.set(0.01, 0.01, 0.01)
  gltf.scene.rotation.x = 0.3
  gltf.scene.rotation.y = (Math.random() * (360 - 1) + 1)
  earthObject = gltf.scene
  scene.add( gltf.scene )	
}, undefined, function(error) {
  console.error( error )
})

ambientLight.position.set(0, 10, 0)
camera.position.z = 10
scene.add( ambientLight );

composer.addPass(renderPass)
composer.addPass(unrealBloomPass)


function animate() {
  requestAnimationFrame( animate )
  if(earthObject) {
    earthObject.rotation.y += 0.001
  }
  renderer.clear()
  composer.render()
}

animate()

function Earth() {
  useEffect(() => {
    sceneContainer = document.querySelector("#container")
    sceneContainer.appendChild( renderer.domElement )
  }, [])

  return (
    <></>
  )
}

export default Earth