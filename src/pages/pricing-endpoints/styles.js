import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  graph: {
    width: "100%",
    height: "500px",
  },
  select: {
    "& option:hover": {
      cursor: "pointer",
      backgroundColor: "rgb(197, 183, 183)",
    },
  },
}));

export default useStyles;
