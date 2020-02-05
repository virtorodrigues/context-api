import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ( theme => ({
  root: {
    height: '100%',
    
    '& .modal': {
      height: 500,
      width: 500,
      backgroundColor: theme.primary.backgroundColor,
      padding: 20,
      borderRadius: 15,
      boxShadow: '2px 2px 3px rgba(50, 30, 50, 0.5)',
    },
    
    '& .select': {
      minWidth: 300,
      color: theme.primary.textColor,
    },
    '& .mainTitle': {
      color: theme.primary.textColor,
      fontSize: 15,
      fontWeight: '800',
      margin: 0,
      textAlign: 'center',
      marginBottom: 30,
    },
    '& .description': {
      color: theme.secondary.textColor,
      fontSize: 10,
      fontWeight: '800',
      margin: 0,
      textAlign: 'justify',
      marginTop: 30,
    },
  },
}));

export default useStyles;