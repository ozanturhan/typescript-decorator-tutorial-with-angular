export function Client(url) {
  return function(target) {
    target.prototype.url = url;
  };
}
