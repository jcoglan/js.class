JS.Console.extend({
  Node: new JS.Class(JS.Console.Base, {
    backtraceFilter: function() {
      return new RegExp(process.cwd() + '/', 'g');
    },

    coloring: function() {
      return require('tty').isatty(1);
    },

    envvar: function(name) {
      return process.env[name] || null;
    },

    exit: function(status) {
      process.exit(status);
    },

    getDimensions: function() {
      var width, height, dims;
      if (process.stdout.getWindowSize) {
        dims   = process.stdout.getWindowSize();
        width  = dims[0];
        height = dims[1];
      } else {
        dims   = process.binding('stdio').getWindowSize();
        width  = dims[1];
        height = dims[0];
      }
      return [width, height];
    },

    print: function(string) {
      process.stdout.write(this.flushFormat() + string);
    },

    puts: function(string) {
      process.stdout.write(this.flushFormat() + string + '\n');
    }
  })
});

