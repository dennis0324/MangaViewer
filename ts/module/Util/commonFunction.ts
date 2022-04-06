function subdomain_from_url(url, base) {
  var retval = 'b';
  if (base) {
    retval = base;
  }
  
  var b = 16;
  
  var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
  var m = r.exec(url);
  if (!m) {
    return 'a';
  }
  
  var g = parseInt(m[2]+m[1], b);
  if (!isNaN(g)) {
    //@ts-expect-error
    retval = String.fromCharCode(97 + gg.m(g)) + retval;
  }
  
  return retval;
}

function url_from_url(url, base) {
  return url.replace(/\/\/..?\.hitomi\.la\//, '//'+subdomain_from_url(url, base)+'.hitomi.la/');
}


function full_path_from_hash(hash) {
  // @ts-expect-error
  return gg.b+gg.s(hash)+'/'+hash;
}

function real_full_path_from_hash(hash) {
  return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}


function url_from_hash(galleryid, image, dir, ext) {
  ext = ext || dir || image.name.split('.').pop();
  dir = dir || 'images';
  
  return 'https://a.hitomi.la/'+dir+'/'+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(galleryid, image, dir, ext, base) {
  if ('tn' === base) {
    return url_from_url('https://a.hitomi.la/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
  }
  return url_from_url(url_from_hash(galleryid, image, dir, ext), base);
}







exports.common = {subdomain_from_url,url_from_url,full_path_from_hash,url_from_hash,url_from_url_from_hash}