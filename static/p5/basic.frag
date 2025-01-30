#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0;
uniform float u_res;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

#define GAUSSIANBLUR2D_KERNELSIZE 32
#include "lygia/filter/gaussianBlur/2D.glsl"

#include "lygia/math/lerp.glsl"

#include "lygia/generative/cnoise.glsl"

void main() {
  // normalize coords
  vec2 pixel = 1.0 / u_resolution;
  vec2 st = gl_FragCoord.xy;
  float scale = min(u_resolution.x, u_resolution.y);
  st -= (u_resolution - scale) / 2.0;
  st /= scale;
  st.y = 1.0 - st.y;
  
  st.x += 0.02 * cnoise(st * u_res) - 0.01;
  
  float v = gaussianBlur2D(u_tex0, st, 1.25 * pixel, 0).r;
  
  v += 0.2 * cnoise(6.0 * st);
  
  v -= pow(distance(vec2(0.5), st) + 0.1, 3.0);
  
  // colors
  vec3 ocean = vec3(0, 0.5, 0.6);
  vec3 shore = vec3(0.1, 0.6, 0.7);
  vec3 sand = vec3(0.9, 0.8, 0.5);
  vec3 green = vec3(0.2, 0.7, 0.1);
  vec3 rock = vec3(0.6, 0.6, 0.6);
  vec3 snow = vec3(0.9, 0.9, 0.9);
  
  vec3 color = vec3(1.0);
  
  if (v < 0.3)
    color = lerp(ocean, shore, v / 0.2);
  else if (v < 0.5)
    color = sand;
  else if (v < 0.75)
    color = green + 0.2 * cnoise(16.0 * st);
  else if (v < 0.95)
    color = rock * 1.5 * v - 0.2;
  else
    color = snow;
  
  
  gl_FragColor = vec4(color, 1.0);
}
