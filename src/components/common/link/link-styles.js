import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gatsbyLink: {
    color: theme.palette.gray,
    fontSize: "20px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  footerLink: {
    fontSize: 18,
  },
  headerLink: {
    fontWeight: 200,
  },
}));

export default useStyles;
