import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette, spacing }) => ({
  footer: {
    backgroundColor: palette.raisinBlack,
    padding: spacing(2),
  },
  image: {
    maxWidth: "1000px",
    width: "100%",
  },
}));
