const components = import.meta.glob('./*.jsx', { eager: true });

const CellComponents = Object.keys(components).reduce((acc, path) => {
  const fileName = path.replace('./', 'Cell').replace('.jsx', '');
  if (fileName.match(".stories") !== null) {    
    // default obj is in the .stories files
    // exclude non- .stories files
    const componentName = fileName.replace('.stories', '')
    acc[componentName] = components[path].default;
  }
  return acc;
}, {});
export default CellComponents;  