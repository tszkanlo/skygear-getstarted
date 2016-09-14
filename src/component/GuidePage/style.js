
export default {
  guidePage: {
    fontFamily: "'Lato', sans-serif",
    minWidth: '295px',
  },
  Hide: { display: 'none' },
  content: { padding: '24px', overflowX: 'hidden' },
  tagline: {
    margin: '20px 0px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#4A4A4A',
  },
  platform: {
    row: { width: '100%', borderBottom: '1px solid #CCCCCC' },
    item: {
      width: '33%',
      textAlign: 'center',
      display: 'inline-block',
    },
  },
  project: {
    row: {
      width: '100%',
      padding: '0 24px',
      boxSizing: 'border-box',
      position: 'relative',
    },
    rowIncludeDocLink: {
      '@media (max-width: 544px)': {
        marginBottom: 78,
      },
    },
    item: { display: 'inline-block' },
    docLink: {
      position: 'absolute',
      top: '19px',
      right: '41px',
      padding: '14px 42px',
      color: '#FFF',
      background: '#007BD4',
      borderRadius: '5px',
      fontSize: '16px',
      textDecoration: 'none',
      textAlign: 'center',
      '@media (max-width: 544px)': {
        top: '78px',
        left: '41px',
      },
    },
  },
  tab: {
    item: {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      color: '#4A4A4A',
      fill: '#1A1A1A',
      fontSize: '18px',
      textAlign: 'left',
      margin: '9px 12px 0px 0px',
      '@media (max-width: 544px)': {
        margin: '9px 6px 0px 0px',
        fontSize: '16px',
      },
    },
    Active: { borderBottom: '5px solid #007BD4', cursor: 'auto' },
    icon: {
      position: 'absolute',
      top: '8px',
      left: '7px',
      overflow: 'auto',
      width: '21px',
    },
    name: { margin: '9px 9px 16px 33px' },
  },
};
