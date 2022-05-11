const size = {
    mobileM: '500px',
    mobileL: '700px',
    tablate: '800px',
    pad: '900px',
    laptop: '1200px',
    desktop: '1920px'
  }
  
  export const device = {
    desktop: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    pad: `(max-width: ${size.pad})`,
    tablate: `(max-width: ${size.tablate})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileM: `(max-width: ${size.mobileM})`,
  };