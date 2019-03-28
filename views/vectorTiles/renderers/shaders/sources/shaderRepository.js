// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,n){return{background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\n\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif // PATTERN\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\nvoid main() {\n#ifdef PATTERN\n  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n\n  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n  // we need to only sample from area that has our sprite in the mosaic.\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n\n  // sample the sprite mosaic\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = u_opacity * color;\n#else\n  gl_FragColor = u_color;\n#endif // PATTERN\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","background.vert":"precision mediump float;\n\nattribute vec2 a_pos;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix; // can we use medium precision?\nvarying mediump vec2 v_tileTextureCoord;\n#endif // PATTERN\n\nvoid main() {\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\n\n#ifdef PATTERN\n  // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif // PATTERN\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n}\n"},circle:{"circle.frag":"precision lowp float;\n\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\nvoid main()\n{\n  mediump float dist = length(v_offset);\n\n  mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\n\n  lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n\n  gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","circle.vert":"precision mediump float;\n\nattribute vec2 a_pos;\nattribute vec4 a_color;\nattribute vec4 a_stroke_color;\nattribute vec4 a_data;\n\nconst float sizePrecision = 0.25; // 1/4\nconst float blurPrecision = 0.03125; // 1/32\n\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n\n// the opacity of the layer given by the painter\nuniform mediump float u_radius;\nuniform lowp vec4 u_color;\nuniform mediump float u_blur;\nuniform mediump float u_stroke_width;\nuniform lowp vec4 u_stroke_color;\n\nuniform mediump float u_antialiasingWidth; // antialiasing (factors in the pixel_ratio for high res devices)\n\nvoid main()\n{\n  v_color = a_color * u_color;\n  v_stroke_color = a_stroke_color * u_stroke_color;\n  v_stroke_width = a_data[1] * sizePrecision * u_stroke_width;\n  v_radius = a_data[2] * u_radius;\n  v_blur = max(a_data[0] * blurPrecision + u_blur, u_antialiasingWidth / (v_radius + v_stroke_width));\n\n  mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n  v_offset = offset;\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos * 0.5, 0.0, 1.0) + u_extrudeMatrix * (v_radius + v_stroke_width) * vec4(offset, 0.0, 0.0);\n}\n"},fill:{"fill.frag":"precision lowp float;\n\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#endif // PATTERN\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\nvarying lowp vec4 v_color;\n\nvec4 mixColors(vec4 color1, vec4 color2) {\n  // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)\n  // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n\n  return vec4(compositeColor, compositeAlpha);\n}\n\nvoid main()\n{\n#ifdef PATTERN\n  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n\n  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.\n  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however\n  // we need to only sample from area that has our sprite in the mosaic.\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n\n  // sample the sprite mosaic\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_color[3] * color;\n#else\n  gl_FragColor = v_color;\n#endif // PATTERN\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","fill.vert":"precision mediump float;\n\nattribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\n\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif // PATTERN\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\n#ifdef DD\nattribute vec4 a_color;\n#endif // DD\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\n\nvoid main()\n{\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif // DD\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n\n#ifdef PATTERN\n  // calculate the texture coordinates of the current vertex. It will of course get interpolated.\n  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates\n  // (-4k to 8k -1) to texture coordinates.\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif // PATTERN\n\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);\n}\n"},icon:{"icon.frag":"precision mediump float;\n\nuniform lowp sampler2D u_texture; // SDF texture\n#ifdef SDF\nuniform lowp vec4 u_color; // a color to override the one of the vertex\nuniform lowp vec4 u_outlineColor;\nuniform mediump float u_outlineSize;\n#endif // SDF\n\nvarying mediump vec2 v_tex;\n// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n// opacity of the layer given by the painter\nvarying lowp float v_transparency;\n\nvarying mediump vec2 v_size;\n\nvarying lowp vec4 v_color;\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\n// we need the conversion function from RGBA to float\n#include <util/encoding.glsl>\n\nvec4 mixColors(vec4 color1, vec4 color2) {\n  // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)\n  // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n\n  return vec4(compositeColor, compositeAlpha);\n}\n\nvoid main()\n{\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n\n  // calculate the distance from the edge [-0.5, 0.5]\n  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n\n  // the soft edge ratio is about 1.5 pixels allocated for the soft edge.\n  // 1 / 86 represents a single pixel given the size of the SDF is 128 and we add 4 pixels margins to deal with\n  // other non SDF types.\n  // The rasterized geometry takes only 86 pixels because of the extra 16 pixels margin for the outline.\n  const float sofetEdgeRatio = 0.248062016; // ==> (32.0 / 86.0) / 1.5;\n  float size = max(v_size.x, v_size.y);\n  float dist = d * sofetEdgeRatio * size;\n\n  // set the fragment's transparency according to the distance from the edge\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n\n  // count for the outline\n  // therefore tint the entire icon area.\n  if (u_outlineSize > 0.25) {\n    lowp vec4 outlinePixelColor = u_outlineColor;\n    // the outline limit ratio is derived from the 16 pixels allocated for the outline and the fact that 1/86 represents\n    // a single pixel.\n    const float outlineLimitRatio = (16.0 / 86.0);\n    float clampedOutlineSize = sofetEdgeRatio * min(u_outlineSize, outlineLimitRatio * max(v_size.x, v_size.y));\n\n    outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n\n    // finally combine the outline and the fill colors\n    gl_FragColor = v_transparency * mixColors(fillPixelColor, outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_transparency * fillPixelColor;\n  }\n#else // not an SDF\n  lowp vec4 texColor = texture2D(u_texture, v_tex);\n  gl_FragColor = v_transparency * texColor;\n#endif // SDF\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\n\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_size;\n#endif // DD\nuniform lowp vec4 u_color;\nuniform mediump float u_size;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\nvarying lowp vec4 v_color;\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n\n// the size of the mosaic given in pixels\nuniform vec2 u_mosaicSize;\n\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n\n// the map's rotation from the north\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\n\n// indicate whether the current set of iconst should be kept upright when the map is rotated\nuniform lowp float u_keepUpright;\n\n// the rate of the change in the opacity (fade) of the icons\nuniform mediump float u_fadeSpeed;\n\n// the low level we transition (to/from)\nuniform mediump float u_minfadeLevel;\n\n// the high level we transition (to/from)\nuniform mediump float u_maxfadeLevel;\n\n// the amount of fade given teh current time past the last recorded level\nuniform mediump float u_fadeChange;\n\n// the opacity of the layer given by the painter\nuniform mediump float u_opacity;\n\n// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\nvarying mediump vec2 v_tex;\n\n// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n// opacity of the layer given by the painter\nvarying lowp float v_transparency;\n\nvarying mediump vec2 v_size;\n\n// the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values\n// by 8 and then at the shader devide by the same number\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\n\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\n\nvoid main()\n{\n  mediump float a_labelMinLevel = a_levelInfo[0];\n  mediump float a_angle         = a_levelInfo[1];\n  mediump float a_minLevel      = a_levelInfo[2];\n  mediump float a_maxLevel      = a_levelInfo[3];\n\n  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n  mediump float delta_z = 0.0;\n\n  // If the label rotates with the map, and if the rotated label is upside down, hide it\n  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated)); //ie. z += (flip > 0) && (64 <= rotated) && (rotated < 192)\n\n  // u_level is the current service level adjusted for the change in font size\n  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n  // calculate the alpha given the change in the fade and the fade-speed\n  lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n  // if the speed is positive we are zooming in and therefore we need to 'fade-in'. Else we need to 'fade-out'\n  v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n  // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n  if (u_maxfadeLevel < a_labelMinLevel)\n  {\n    v_transparency = 0.0;\n  }\n  if (u_minfadeLevel >= a_labelMinLevel)\n  {\n    v_transparency = 1.0;\n  }\n\n  // if label had been faded out, clip it\n  delta_z += step(v_transparency, 0.0);\n\n  vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\n\n  v_size = abs(offset);\n\n#ifdef SDF\n  offset = (120.0 / 86.0) * offset;\n#endif // SDF\n\n#ifdef DD\n  mediump float icon_size = a_size * u_size;\n#else\n  mediump float icon_size = u_size;\n#endif // DD\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * icon_size * vec4(offset, delta_z, 0.0);\n\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif // DD\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n\n  v_tex = a_tex.xy / u_mosaicSize;\n  v_transparency *= v_color.w;\n}\n"},line:{"line.frag":"varying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\n\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\n\nvarying mediump float v_blur;\n\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\n\n// Horizontal scale is used to scale the horizontal texture coordinate v_normal.x before adding it as an offset to the\n// accumulated distance. Most vertices will have v_normal.x == 0, because the pattern must be sampled only depending on\n// the v_accumulatedDistance value. But tessellation at caps can have vertices with v_normal.x != 0, thus allowing to\n// \"keep moving\" for a few more pixel even when the line has ended or has not started yet.\nconst mediump float tileCoordRatio = 8.0;\n#else\nvarying mediump vec2 v_dasharray;\n#endif\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\nvoid main()\n{\n  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,\n  // and any value in between will be inside the line (the sign represent the direction - right or left).\n  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n\n  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.\n  // We need to count for both sides of the line.\n  lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n\n#ifdef PATTERN\n  // we need to calculate the relative portion of the line texture along the line given the accumulated distance aliong the line\n  // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values\n  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n\n  // in order to calculate the texture coordinates perpendicular to the line (Y axis), we use the interpolated normal values\n  // which range from -1.0 to 1.0. On the line's centerline, the value of the interpolated normal is 0.0, however the relative\n  // texture value should be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)\n  // (TL) ---------------------------      --\x3e left edge of line. Interpolated normal is 1.0\n  //              | -> line-width / 2\n  //      - - - - - - - - - - - - - -\n  //              | -> line-width / 2\n  //      ---------------------------- (BR)--\x3e right edge of line. Interpolated normal is -1.0\n\n  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n\n  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates\n  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n\n  // get the color from the texture\n  lowp vec4 color = texture2D(u_texture, texCoord);\n\n  // finally write the fragment value\n  gl_FragColor = alpha * v_color[3] * color;\n#else\n  // now calculate the dashes given the accumulated distance of the line:\n  // start with calculating a normalized position along the line\n  lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n\n  // calculate the contribution to the alpha of the dash part. It is provided by the shortest portion of the position along the dash.\n  // we must clamp since the value might be bigger than 1 or smaller than zero (when over a dash).\n  //   | <--- pos along the dash part\n  // -------_______-------_______\n  // when the dashPos is over the 'gap' part of the dash dasharray.x - dashPos is negative and therefore the alpha will\n  // get clamped to zero.\n  // when dasharray.x - dashPos is positive, or when dashPos is smaller than 1.0, it gives us a soft edge to each dash part.\n  // along the direction of the line.\n  lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n\n  // if we don't have a no-data part to the dash then it is a solid line\n  dashAlpha = max(sign(-v_dasharray.y), dashAlpha);\n  // finally multiply the fragment's alpha by the calculated dash-alpha\n  alpha *= dashAlpha;\n\n  // output the fragment color\n  gl_FragColor = alpha * v_color;\n#endif // PATTERN\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","line.vert":"/* The implementation of the renderer is based on the article and implementation of MB described here:\n* https://www.mapbox.com/blog/drawing-antialiased-lines/\n*/\n\nattribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistance;\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n\nuniform mediump float u_blur;\nuniform mediump float u_antialiasing; // the feather distance at which the line edge fades out\n\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n\n// the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate\nvarying mediump vec2 v_normal;\n\n// the accumulated distance along the line. We need this information in order to render the dashes.\nvarying highp float v_accumulatedDistance;\n\nconst float scale = 1.0 / 31.0;\n\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_width;\n#endif // DD\nuniform lowp vec4 u_color;\nuniform mediump float u_width;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth; // the inset and outset of the line\nvarying mediump float v_blur;\n\n#ifndef PATTERN\nuniform mediump vec2 u_dasharray;\nvarying mediump vec2 v_dasharray;\n#endif\n\nvoid main()\n{\n  v_normal = a_offsetAndNormal.zw * scale;\n\n#ifdef DD\n  v_lineHalfWidth = a_width * u_width;\n#else\n  v_lineHalfWidth = u_width;\n#endif // DD\n\n  v_lineHalfWidth += u_antialiasing;\n  v_lineHalfWidth *= 0.5;\n\n#ifndef PATTERN\n#ifdef DD\n  v_dasharray = u_dasharray * a_width;\n#else\n  v_dasharray = u_dasharray * u_width;\n#endif // DD\n#endif\n\n  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  mediump vec2 dist = v_lineHalfWidth * a_offsetAndNormal.xy * scale;\n\n  // transform the vertex\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n\n  // the accumulated distance will be used to calculate the dashes (or the no-data...)\n  v_accumulatedDistance = a_accumulatedDistance.x;\n\n  v_blur = u_blur + u_antialiasing;\n\n  #ifdef DD\n    v_color = a_color * u_color;\n  #else\n    v_color = u_color;\n  #endif // DD\n\n  #ifdef ID\n    v_id = u_id / 255.0;\n  #endif // ID\n}\n"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\nvoid main()\n{\n  // Calculate the distance of the pixel from the line in pixels.\n  lowp float dist = abs(v_normal.y);\n\n  lowp float alpha = smoothstep(1.0, 0.0, dist);\n  gl_FragColor = alpha * v_color;\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n\n#ifdef DD\nattribute vec4 a_color;\n#endif // DD\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\n\nvarying lowp vec2 v_normal;\n\nconst float scale = 1.0 / 15.0;\n\nvoid main()\n{\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif // DD\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n\n  v_normal = a_xnormal;\n\n  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the\n  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)\n  mediump vec4 dist = vec4(u_outline_width * a_offset * scale, 0.0, 0.0);\n\n  // Remove the texture normal bit of the position before scaling it with the\n  // model/view matrix. Add the extrusion vector *after* the model/view matrix\n  // because we're extruding the line in pixel space, regardless of the current\n  // tile's zoom level.\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * dist;\n}\n"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nuniform mediump float u_edgeDistance;\n\nvarying lowp vec2 v_tex;\nvarying lowp float v_transparency;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif // ID\n\n// this is taken from http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf\n// and https://www.mapbox.com/blog/text-signed-distance-fields/\n// http://metalbyexample.com/rendering-text-in-metal-with-signed-distance-fields/\n\nvoid main()\n{\n  // read the distance from the SDF texture\n  lowp float dist = texture2D(u_texture, v_tex).a;\n\n  // use a smooth-step in order to calculate the geometry of the shape given by the distance field\n  mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist) * v_transparency;\n\n  gl_FragColor = alpha * v_color;\n\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif // ID\n}\n","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\n\nuniform lowp vec4 u_color; // always defined as halo does not support data driven but text does\n#ifdef DD\nattribute vec4 a_color;\n#endif // DD\nvarying lowp vec4 v_color;\n\nuniform mediump float u_size;\n#ifdef DD\nattribute mediump float a_size;\n#endif // DD\nvarying mediump float v_size;\n\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif // ID\n\n\n// attribute bool a_visible; // --\x3e a one bit controlling the visibility of the vertex\n\n// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate\n// relative to the tile's upper left corner\n// the extrusion vector.\nuniform highp mat4 u_transformMatrix;\n\n// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation\nuniform highp mat4 u_extrudeMatrix;\n\n// u_normalized_origin is the tile's upper left corner given in normalized coordinates\nuniform highp vec2 u_normalized_origin;\n\n// the size of the mosaic given in pixels\nuniform vec2 u_mosaicSize;\n\n// the z of the layer. Given by the order of the layers in the style\nuniform mediump float u_depth;\n\n// the map's rotation from the north\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\n\n// indicate whether the current set of iconst should be kept upright when the map is rotated\nuniform lowp float u_keepUpright;\n\n// the rate of the change in the opacity (fade) of the icons\nuniform mediump float u_fadeSpeed;\n\n// the low level we transition (to/from)\nuniform mediump float u_minfadeLevel;\n\n// the high level we transition (to/from)\nuniform mediump float u_maxfadeLevel;\n\n// the amount of fade given teh current time past the last recorded level\nuniform mediump float u_fadeChange;\n\n// the opacity of the layer given by the painter\nuniform mediump float u_opacity;\n\n// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture\nvarying lowp vec2 v_tex;\n\n// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the\n// opacity of the layer given by the painter\nvarying lowp float v_transparency;\n\n// the vertex offsets are given in integers, therefore in order to maintain a reasonable precision we multiply the values\n// by 8 and then at the shader divide by the same number\nconst float offsetPrecision = 1.0 / 8.0;\n\n// outline position and appearance\nconst mediump float edgePos = 0.75; // defined by the SDF encoding\nuniform mediump float u_edgeDistance;\nuniform mediump float u_edgeBlur;\nuniform mediump float u_antialiasingWidth; // antialiasing (factors in the pixel_ratio for high res devices)\n\nvarying mediump float v_edgeDistance; // will factor in the size\nvarying mediump float v_edgeWidth; // will factor in the size\n\nuniform lowp float u_halo; // needed to avoid using the color attribute for halo\n\nvoid main()\n{\n  mediump float a_labelMinLevel = a_levelInfo[0];\n  mediump float a_angle        = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n\n  // if the given vertex should not be visible simply clip it by adding it a value that will push it outside the clipping plane\n  mediump float delta_z = 0.0;\n\n  // TODO: force clipping the vertex in case that the vertex isn't visible\n  //delta_z += a_visible ? 0.0 : 1.0;\n\n  // If the label rotates with the map, and if the rotated label is upside down, hide it\n  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated)); //ie. z += (flip > 0) && (64 <= rotated) && (rotated < 192)\n\n  // u_level is the current service level adjusted for the change in font size\n  delta_z += 1.0 - step(a_minLevel, u_level); // Test if (level < minLevel)\n  delta_z += step(a_maxLevel, u_level); // Test if (maxLevel <= level)\n\n  // calculate the alpha given the change in the fade and the fade-speed\n  lowp float alpha = clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0);\n\n  // if the speed is positive we are zooming in and therefore we need to 'fade-in'. Else we need to 'fade-out'\n  v_transparency = (u_fadeSpeed >= 0.0 ? alpha : 1.0 - alpha);\n\n  // now deal with the min/max fade-levels. If we exceeded the level we simply snap to 0 or 1\n  if (u_maxfadeLevel < a_labelMinLevel)\n  {\n    v_transparency = 0.0;\n  }\n  if (u_minfadeLevel >= a_labelMinLevel)\n  {\n    v_transparency = 1.0;\n  }\n\n  // if label has been faded out, clip it\n  delta_z += step(v_transparency, 0.0);\n\n  v_tex = a_tex.xy / u_mosaicSize;\n\n#ifdef DD\n  if (u_halo > 0.5)\n  {\n    v_color = u_color;\n  }\n  else\n  {\n    v_color = a_color * u_color;\n    // opacity already factored in a_color\n  }\n#else\n  v_color = u_color;\n#endif // DD\n\n#ifdef DD\n  v_size = a_size * u_size;\n#else\n  v_size = u_size;\n#endif // DD\n\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif // ID\n\n  v_edgeDistance = edgePos - u_edgeDistance / v_size;\n  v_edgeWidth = (u_antialiasingWidth + u_edgeBlur) / v_size;\n\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * v_size * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);\n}\n"},tileInfo:{"tileInfo.frag":"uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\n\nvoid main(void) {\n  lowp vec4 color = texture2D(u_texture, v_tex);\n  gl_FragColor = 0.75 * color;\n}\n",
"tileInfo.vert":"attribute vec2 a_pos;\n\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_coord_ratio;\nuniform mediump vec2 u_delta; // in tile coordinates\nuniform mediump vec2 u_dimensions; // in tile coordinates\n\nvarying mediump vec2 v_tex;\n\nvoid main() {\n  mediump vec2 offests = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\n\n  v_tex = a_pos;\n}\n"},util:{"encoding.glsl":"// Factors to convert rgba back to float\nconst vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\n\nfloat rgba2float(vec4 rgba) {\n  // Convert components from 0->1 back to 0->255 and then\n  // add the components together with their corresponding\n  // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n  return dot(rgba, rgba2float_factors);\n}\n"}}});