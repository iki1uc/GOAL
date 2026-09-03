// cache.js
const axis = A81_AXIS.build();
cache.data = axis.matrix.map(row => row.map(v => v * A81_AXIS.cplus));
