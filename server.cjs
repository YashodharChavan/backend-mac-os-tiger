function traverseFileSystem(node, path = '', callback) {
  // Apply the callback on current node
  callback(node, path);

  if (node.type === 'dir' && node.children) {
    for (const name in node.children) {
      const child = node.children[name];
      const childPath = path === '/' ? `/${name}` : `${path}/${name}`;
      traverseFileSystem(child, childPath, callback);
    }
  }
}



const fileSystem = {
  '/': {
    type: 'dir',
    children: {
      Applications: { type: 'dir', children: {}, },
      System: {
        type: 'dir',
        children: {
          Library: { type: 'dir', children: {} },
          dev: { type: 'dir', children: {} },
        }
      },
      Library: { type: 'dir', children: {} },
      Users: {
        type: 'dir',
        children: {
          yashodhar: {
            type: 'dir',
            children: {
              Documents: { type: 'dir', children: {} },
              Music: { type: 'dir', children: {} },
              Movies: { type: 'dir', children: {} },
              Pictures: { type: 'dir', children: {} },
              Public: { type: 'dir', children: {} },
              Sites: { type: 'dir', children: {} },
              'file.txt': { type: 'file', content: 'Hello World' },
              Desktop: {
                type: 'dir', children: {
                  'about.md': { type: 'file', content: 'This is a markdown file.' },
                }
              }
            }
          }
        }
      },
      etc: { type: 'dir', children: {} },
      tmp: { type: 'dir', children: {} },
      var: { type: 'dir', children: {} },
      bin: { type: 'dir', children: {} }
    }
  }
};

traverseFileSystem(fileSystem['/'], '/', (node, path) => {
  console.log(`${node.type.toUpperCase()}: ${path}`);
});