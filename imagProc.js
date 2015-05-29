//抓取canvas tag並定義ctx
var canvas = document.getElementById("canvas1");
var ctx    = canvas.getContext("2d");
var img    = document.getElementById("GF");

//設定img參數
img.crossOrigin = "anonymous";
img.src = "GreenFace.jpg";
// img.src = "https://avatars2.githubusercontent.com/u/12164734?v=3&s=460";
// img.src = "data:image/jpeg;base64,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";
Filters = {};

doGrayscale = function(){
  var pre_pixels = Filters.getPixels(img);
  var post_pixels = Filters.grayscale(pre_pixels);
  ctx.putImageData(post_pixels, 0, 0);
}

doReversal = function(){
  var pre_pixels = Filters.getPixels(img);
  var post_pixels = Filters.reversal(pre_pixels);
  ctx.putImageData(post_pixels, 0, 0);
}

doBrightness = function(param){
  var pre_pixels = Filters.getPixels(img);
  var post_pixels = Filters.brightness(pre_pixels, parseInt(param));
  ctx.putImageData(post_pixels, 0, 0);
}

doThreshold = function(param){
  var pre_pixels = Filters.getPixels(img);
  var post_pixels = Filters.threshold(pre_pixels, parseInt(param));
  ctx.putImageData(post_pixels, 0, 0);
}

doSharpenFilter = function(){
  var post_pixels = Filters.filterImage(Filters.convolute, img,
  [  0, -1,  0,
    -1,  5, -1,
     0, -1,  0 ]
  );
  ctx.putImageData(post_pixels, 0, 0);
}

doBlurFilter = function(){
  var post_pixels = Filters.filterImage(Filters.convolute, img,
  [ 1/9, 1/9, 1/9,
    1/9, 1/9, 1/9,
    1/9, 1/9, 1/9 ]
  );
  ctx.putImageData(post_pixels, 0, 0);
}

doSobelFilter = function(){
  var grayscale = Filters.filterImage(Filters.grayscale, img);
  // Note that ImageData values are clamped between 0 and 255, so we need
  // to use a Float32Array for the gradient values because they
  // range between -255 and 255.
  var vertical = Filters.convolute(grayscale,
    [ -1, 0, 1,
      -2, 0, 2,
      -1, 0, 1 ]);
  var horizontal = Filters.convolute(grayscale,
    [ -1, -2, -1,
       0,  0,  0,
       1,  2,  1 ]);
  var final_image = Filters.createImageData(vertical.width, vertical.height);
  for (var i=0; i<final_image.data.length; i+=4) {
    // make the vertical gradient red
    var v = Math.abs(vertical.data[i]);
    final_image.data[i] = v;
    // make the horizontal gradient green
    var h = Math.abs(horizontal.data[i]);
    final_image.data[i+1] = h;
    // and mix in some blue for aesthetics
    final_image.data[i+2] = (v+h)/4;
    final_image.data[i+3] = 255; // opaque alpha
  }
  ctx.putImageData(final_image, 0, 0);
}

do3DFilter = function(){
  var post_pixels = Filters.filterImage(Filters.convolute, img,
  [ 1, 1, 1,
    1, 0.7, -1,
    -1, -1, -1 ]
  );
  ctx.putImageData(post_pixels, 0, 0);
}

img.onload = function(){
  var post_pixels = Filters.getPixels(img);
  ctx.putImageData(post_pixels, 0, 0);
}

Filters.getPixels = function(img) {
  var c = Filters.getCanvas(img.width, img.height);
  var ctx = c.getContext('2d');
  ctx.drawImage(img,0,0);
  return ctx.getImageData(0,0,c.width,c.height);
};

Filters.getCanvas = function(w,h) {
  var c = document.getElementById('canvas1');
  c.width = w;
  c.height = h;
  return c;
};

Filters.grayscale = function(pixels, args) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126*r + 0.7152*g + 0.0722*b;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
};

Filters.reversal = function(pixels, args) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    d[i] = 255-r;
    d[i+1] = 255-g;
    d[i+2] = 255-b;
  }
  return pixels;
};

Filters.brightness = function(pixels, adjustment) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    d[i] += adjustment;
    d[i+1] += adjustment;
    d[i+2] += adjustment;
  }
  return pixels;
};

Filters.threshold = function(pixels, threshold) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 0 : 255;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
};

Filters.filterImage = function(filter, image, var_args) {
  var args = [this.getPixels(image)];
  for (var i=2; i<arguments.length; i++) {
    args.push(arguments[i]);
  }
  return filter.apply(null, args);
};

Filters.createImageData = function(w,h) {
  return ctx.createImageData(w,h);
};

Filters.convolute = function(pixels, weights, opaque) {
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side/2);
  var src = pixels.data;
  var sw = pixels.width;
  var sh = pixels.height;
  // pad output by the convolution matrix
  var w = sw;
  var h = sh;
  var output = Filters.createImageData(w, h);
  var dst = output.data;
  // go through the destination image pixels
  var alphaFac = opaque ? 1 : 0;
  for (var y=0; y<h; y++) {
    for (var x=0; x<w; x++) {
      var sy = y;
      var sx = x;
      var dstOff = (y*w+x)*4;
      // calculate the weighed sum of the source image pixels that
      // fall under the convolution matrix
      var r=0, g=0, b=0, a=0;
      for (var cy=0; cy<side; cy++) {
        for (var cx=0; cx<side; cx++) {
          var scy = sy + cy - halfSide;
          var scx = sx + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = (scy*sw+scx)*4;
            var wt = weights[cy*side+cx];
            r += src[srcOff] * wt;
            g += src[srcOff+1] * wt;
            b += src[srcOff+2] * wt;
            a += src[srcOff+3] * wt;
          }
        }
      }
      dst[dstOff] = r;
      dst[dstOff+1] = g;
      dst[dstOff+2] = b;
      dst[dstOff+3] = a + alphaFac*(255-a);
    }
  }
  return output;
};