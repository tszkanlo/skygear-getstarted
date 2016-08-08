
export default {
  guidePage: {
    fontFamily: "'Lato', sans-serif",
    minWidth: '295px',
  },
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
      position: 'relative',
      '@media (max-width: 544px)': {
        marginBottom: '78px',
      },
    },
    item: { display: 'inline-block' },
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
      margin: '9px 12px 0px 12px',
      '@media (max-width: 544px)': {
        margin: '9px 6px 0px 6px',
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
  docLink: {
    padding: '14px 42px',
    fontSize: '16px',
    color: '#FFF',
    background: '#007BD4',
    borderRadius: '5px',
    position: 'absolute',
    top: '19px',
    right: '41px',
    textDecoration: 'none',
    textAlign: 'center',
    '@media (max-width: 544px)': {
      top: '78px',
      left: '41px',
    },
  },
};
