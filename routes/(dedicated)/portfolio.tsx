import { define } from "@/utils.ts";
import Mobile from "./(_components)/mobile/portfolio.tsx";
import Desktop from "./(_components)/desktop/portfolio.tsx";

export default define.page((props) => {
  if (props.state.mobile === true) {
    return <Mobile {...props} />;
  }

  return <Desktop {...props} />;
});
