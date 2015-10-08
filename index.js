// hasOwnProperty shortcut
function hap(o, p) {
  return ({}).hasOwnProperty.call(o, p);
}

// Replace {{variable}} in `s` with the template data in `d`.
function templer(s, d) {
  return s.replace(/{{([a-zA-Z0-9_-]+)}}/g, function (match, key) {
    return hap(d, key) ? d[key] : match;
  });
}

module.exports = templer;
