import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    flexGrow: "0",
    flexShrink: "0",
    flexBasis: "auto",
  },
  footer: {
    flexGrow: "0",
    flexShrink: "0",
    flexBasis: "auto",
  },
  content: {
    marginTop: "80px",
    marginBottom: "60px",
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "auto",
  },
});
