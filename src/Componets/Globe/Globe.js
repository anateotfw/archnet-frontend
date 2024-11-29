import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const Globe = () => {
  const containerRef = useRef(null);
  const canvas3DRef = useRef(null);
  const canvas2DRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer, scene, camera, rayCaster, controls;
    let globe, globeMesh;
    let pointer;
    let clock, mouse;
    let earthTexture, mapMaterial;
    let markers = [];
    let isActive = true;
    let popupOpenTl, popupCloseTl;

    // Add country coordinates
    const countries = [
      // { name: 'Iran', lat: 32.4279, lng: 53.6880, color: '#6d4aff' },
      // { name: 'Finland', lat: 61.9241, lng: 25.7482, color: '#6d4aff' },
      // { name: 'Turkey', lat: 38.9637, lng: 35.2433, color: '#6d4aff' },
      // { name: 'Germany', lat: 51.1657, lng: 10.4515, color: '#6d4aff' },
      // { name: 'US', lat: 37.0902, lng: -95.7129, color: '#6d4aff' },
      // { name: 'Sweden', lat: 60.1282, lng: 18.6435, color: '#6d4aff' },
      // { name: 'UAE', lat: 23.4241, lng: 53.8478, color: '#6d4aff' },
      { name: 'Netherlands', lat: 52.1326, lng: 5.2913, color: '#6d4aff' },
      { name: 'France', lat: 46.2276, lng: 2.2137, color: '#6d4aff' },
      { name: 'UK', lat: 55.3781, lng: -3.4360, color: '#6d4aff' },
      { name: 'Italy', lat: 41.8719, lng: 12.5674, color: '#6d4aff' },
      { name: 'Spain', lat: 40.4637, lng: -3.7492, color: '#6d4aff' },
      { name: 'Poland', lat: 51.9194, lng: 19.1451, color: '#6d4aff' },
      { name: 'Japan', lat: 36.2048, lng: 138.2529, color: '#6d4aff' },
      { name: 'South Korea', lat: 35.9078, lng: 127.7669, color: '#6d4aff' },
      { name: 'Singapore', lat: 1.3521, lng: 103.8198, color: '#6d4aff' },
      { name: 'India', lat: 20.5937, lng: 78.9629, color: '#6d4aff' },
      { name: 'Canada', lat: 56.1304, lng: -106.3468, color: '#6d4aff' },
      { name: 'Brazil', lat: -14.2350, lng: -51.9253, color: '#6d4aff' },
      { name: 'Mexico', lat: 23.6345, lng: -102.5528, color: '#6d4aff' },
      { name: 'Australia', lat: -25.2744, lng: 133.7751, color: '#6d4aff' },
      { name: 'New Zealand', lat: -40.9006, lng: 174.8860, color: '#6d4aff' }
    ];

    // Convert lat/lng to 3D coordinates
    function latLngToVector3(lat, lng, radius = 1) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    }

    // Create connections between countries
    function createConnections() {
      const connections = [];
      for (let i = 0; i < countries.length; i++) {
        for (let j = i + 1; j < countries.length; j++) {
          const start = latLngToVector3(countries[i].lat, countries[i].lng, 1.02);
          const end = latLngToVector3(countries[j].lat, countries[j].lng, 1.02);
          
          const points = [];
          const segments = 50;
          for (let k = 0; k <= segments; k++) {
            const alpha = k / segments;
            const point = new THREE.Vector3().lerpVectors(start, end, alpha);
            // Add arc to the connection
            point.normalize().multiplyScalar(1.02 + Math.sin(alpha * Math.PI) * 0.1);
            points.push(point);
          }
          
          const curve = new THREE.CatmullRomCurve3(points);
          const geometry = new THREE.TubeGeometry(curve, 20, 0.003, 8, false);
          const material = new THREE.MeshBasicMaterial({
            color: '#6d4aff',
            transparent: true,
            opacity: 0.3
          });
          connections.push(new THREE.Mesh(geometry, material));
        }
      }
      return connections;
    }

    // Updated createMarkers with beep animation
    function createMarkers() {
      countries.forEach((country, index) => {
        const position = latLngToVector3(country.lat, country.lng, 1.02);
        
        // Create marker
        const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({
          color: country.color,
          transparent: true,
          opacity: 0.8
        });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(position);
        
        // Create glow effect
        const glowGeometry = new THREE.SphereGeometry(0.025, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: country.color,
          transparent: true,
          opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(position);
        
        // Add to scene and store reference
        scene.add(marker);
        scene.add(glow);
        markers.push({ marker, glow, timeOffset: index * 0.2 }); // Offset for staggered animation
      });
    }

    function createOrbitControls() {
      controls = new OrbitControls(camera, canvas3DRef.current);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.minPolarAngle = 0.4 * Math.PI;
      controls.maxPolarAngle = 0.4 * Math.PI;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5; // Slower rotation
    }

    function createGlobe() {
      const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
      mapMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_map_tex: { type: "t", value: earthTexture },
          u_dot_size: { type: "f", value: 0 },
          u_pointer: { type: "v3", value: new THREE.Vector3(0, 0, 1) },
          u_time_since_click: { value: 0 },
        },
        transparent: true
      });

      globe = new THREE.Points(globeGeometry, mapMaterial);
      scene.add(globe);

      globeMesh = new THREE.Mesh(globeGeometry, new THREE.MeshBasicMaterial({
        color: 0x222222,
        transparent: true,
        opacity: 0.05
      }));
      scene.add(globeMesh);
    }

    function createPointer() {
      const geometry = new THREE.SphereGeometry(0.04, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0
      });
      pointer = new THREE.Mesh(geometry, material);
      scene.add(pointer);
    }

    function createPopupTimelines() {
      // Create the timelines
      popupOpenTl = gsap.timeline({ paused: true })
        .to(pointer.material, {
          duration: 0.2,
          opacity: 1,
        }, 0);

      popupCloseTl = gsap.timeline({ paused: true })
        .to(pointer.material, {
          duration: 0.3,
          opacity: 0.2,
        }, 0);
    }

    function addCanvasEvents() {
      containerRef.current.addEventListener("mousemove", (e) => {
        mouse.x = (e.clientX - containerRef.current.offsetLeft) / containerRef.current.offsetWidth * 2 - 1;
        mouse.y = -((e.clientY - containerRef.current.offsetTop) / containerRef.current.offsetHeight) * 2 + 1;
      });
    }

    function render() {
      if (!isActive || !scene || !renderer || !camera) return;
      
      const time = clock.getElapsedTime();
      
      if (mapMaterial) {
        mapMaterial.uniforms.u_time_since_click.value = time;
      }
      
      // Animate markers
      markers.forEach(({ marker, glow, timeOffset }) => {
        if (!marker || !glow) return;
        const t = (time + timeOffset) % 2;
        const scale = 1 + Math.sin(t * Math.PI) * 0.2;
        
        marker.scale.set(scale, scale, scale);
        glow.scale.set(scale * 1.2, scale * 1.2, scale * 1.2);
        
        marker.material.opacity = 0.8 + Math.sin(t * Math.PI) * 0.2;
        glow.material.opacity = 0.3 + Math.sin(t * Math.PI) * 0.1;
      });
      
      // Animate connections
      if (scene.children) {
        scene.children.forEach(child => {
          if (child && child.isMesh && child.material && child.material.transparent && 
              !markers.find(m => m.marker === child || m.glow === child)) {
            child.material.opacity = 0.3 + Math.sin(time * 2) * 0.1;
          }
        });
      }
      
      if (controls) controls.update();
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(render);
    }

    function initScene() {
      renderer = new THREE.WebGLRenderer({ canvas: canvas3DRef.current, alpha: true });
      renderer.setPixelRatio(2);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
      camera.position.z = 1.1;

      rayCaster = new THREE.Raycaster();
      rayCaster.far = 1.15;
      mouse = new THREE.Vector2(-1, -1);
      clock = new THREE.Clock();

      createOrbitControls();
      
      new THREE.TextureLoader().load(
        '/earthmap.jpg',
        (mapTex) => {
          earthTexture = mapTex;
          earthTexture.repeat.set(1, 1);
          createGlobe();
          createPointer();
          createPopupTimelines();
          addCanvasEvents();
          updateSize();
          createMarkers();
          const connections = createConnections();
          connections.forEach(connection => scene.add(connection));
          render();
        }
      );
    }

    function updateSize() {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      const minSide = Math.min(containerWidth, containerHeight);
      
      const isMobile = window.innerWidth <= 768;
      const scale = isMobile ? 0.8 : 0.65;
      
      const size = minSide * scale;
      
      renderer.setSize(size, size);
      canvas2DRef.current.width = canvas2DRef.current.height = size;
      
      if (mapMaterial) {
        const dotSize = isMobile ? 0.06 : 0.04;
        mapMaterial.uniforms.u_dot_size.value = dotSize * size;
      }
    }

    const vertexShader = `
      uniform sampler2D u_map_tex;
      uniform float u_dot_size;
      uniform float u_time_since_click;
      uniform vec3 u_pointer;
      
      #define PI 3.14159265359
      
      varying float vOpacity;
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        float visibility = step(.2, texture2D(u_map_tex, uv).r);
        gl_PointSize = visibility * u_dot_size;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vOpacity = (1. / length(mvPosition.xyz) - .7);
        vOpacity = clamp(vOpacity, .03, 1.);
        
        float t = u_time_since_click - .1;
        t = max(0., t);
        float max_amp = .15;
        float dist = 1. - .5 * length(position - u_pointer);
        float damping = 1. / (1. + 20. * t);
        float delta = max_amp * damping * sin(5. * t * (1. + 2. * dist) - PI);
        delta *= 1. - smoothstep(.8, 1., dist);
        vec3 pos = position;
        pos *= (1. + delta);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      }
    `;

    const fragmentShader = `
      uniform sampler2D u_map_tex;
      
      varying float vOpacity;
      varying vec2 vUv;
      
      void main() {
        vec3 color = texture2D(u_map_tex, vUv).rgb;
        color -= .2 * length(gl_PointCoord.xy - vec2(.5));
        float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
        if (dot < 0.5) discard;
        gl_FragColor = vec4(color, dot * vOpacity);
      }
    `;

    initScene();
    window.addEventListener('resize', updateSize);

    return () => {
      isActive = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('resize', updateSize);
      
      // Proper cleanup of Three.js resources
      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        
        while(scene.children && scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
      }

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement = null;
      }

      if (controls) {
        controls.dispose();
      }

      // Clear all references
      markers.forEach(({ marker, glow }) => {
        if (marker) marker.geometry.dispose();
        if (marker && marker.material) marker.material.dispose();
        if (glow) glow.geometry.dispose();
        if (glow && glow.material) glow.material.dispose();
      });

      markers = [];
      scene = null;
      renderer = null;
      camera = null;
      controls = null;
      globe = null;
      globeMesh = null;
      mapMaterial = null;
      earthTexture = null;
    };
  }, []);

  return (
    <div className="globe-wrapper" ref={containerRef}>
      <canvas id="globe-3d" ref={canvas3DRef}></canvas>
      <canvas id="globe-2d-overlay" ref={canvas2DRef}></canvas>
    </div>
  );
};

export default Globe;